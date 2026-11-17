// Copyright (c) 2026 ObjectStack. Licensed under the Apache-2.0 license.

/**
 * `branding.darkSidebar`: the operator's dark-sidebar appearance.
 *
 *   saved / env-pinned `branding.dark_sidebar_enabled`
 *     → host option `darkSidebar`
 *     → `OS_BRANDING_DARK_SIDEBAR_ENABLED`
 *     → off
 *
 * Always served as a boolean. The `settings` stand-in answers `getMany` with
 * `{ value, source }` per key, `source: 'default'` for a key nobody set, as
 * the real service does.
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { RuntimeConfigPlugin, type RuntimeConfigPluginConfig } from './runtime-config-plugin.js';

const ENV = 'OS_BRANDING_DARK_SIDEBAR_ENABLED';

interface Stub {
    offered: boolean;
    saved: Record<string, { value: unknown; source: string }>;
    calls: Array<readonly string[]>;
}

function settingsService(stub: Stub) {
    return {
        listManifests: () => (stub.offered
            ? [{
                namespace: 'branding',
                specifiers: [{ key: 'workspace_name' }, { key: 'accent_color' }, { key: 'logo_url' }, { key: 'dark_sidebar_enabled' }],
            }]
            : []),
        getMany: async (_namespace: string, keys: readonly string[]) => {
            stub.calls.push(keys);
            return Object.fromEntries(keys.map((k) => [
                k,
                stub.saved[k] ?? { value: k === 'dark_sidebar_enabled' ? false : undefined, source: 'default' },
            ]));
        },
    };
}

async function serveBranding(opts: { pluginConfig?: RuntimeConfigPluginConfig; settings?: unknown } = {}) {
    let handler: ((c: any) => Promise<any>) | undefined;
    const rawApp = {
        get(path: string, h: (c: any) => Promise<any>) {
            if (path === '/api/v1/runtime/config') handler = h;
        },
    };
    const ctx: any = {
        logger: { info() {}, warn() {} },
        getService: (n: string) => {
            if (n === 'http-server') return { getRawApp: () => rawApp };
            if (n === 'settings' && opts.settings) return opts.settings;
            throw new Error(`no ${n}`);
        },
        hooks: [] as Array<() => Promise<void>>,
        hook(_e: string, cb: () => Promise<void>) { this.hooks.push(cb); },
    };
    const plugin = new RuntimeConfigPlugin({ controlPlaneUrl: '', singleEnvironment: true, ...opts.pluginConfig });
    await plugin.start(ctx);
    for (const cb of ctx.hooks) await cb();
    if (!handler) throw new Error('handler not mounted');
    return (await handler({ req: { header: () => undefined }, json: (b: any) => b })).branding;
}

const newStub = (over: Partial<Stub> = {}): Stub => ({ offered: true, saved: {}, calls: [], ...over });

describe('RuntimeConfigPlugin — branding.darkSidebar', () => {
    let before: string | undefined;
    beforeEach(() => { before = process.env[ENV]; delete process.env[ENV]; });
    afterEach(() => {
        if (before === undefined) delete process.env[ENV];
        else process.env[ENV] = before;
    });

    it('is served as false when nothing sets it', async () => {
        expect((await serveBranding()).darkSidebar).toBe(false);
        expect((await serveBranding({ settings: settingsService(newStub()) })).darkSidebar).toBe(false);
    });

    it.each(['true', '1', 'yes'])('OS_BRANDING_DARK_SIDEBAR_ENABLED=%s turns it on with no settings service', async (raw) => {
        process.env[ENV] = raw;
        expect((await serveBranding()).darkSidebar).toBe(true);
    });

    it.each(['false', '0', '', 'on'])('OS_BRANDING_DARK_SIDEBAR_ENABLED=%j leaves it off', async (raw) => {
        process.env[ENV] = raw;
        expect((await serveBranding()).darkSidebar).toBe(false);
    });

    it('the host option outranks the env var', async () => {
        process.env[ENV] = 'true';
        expect((await serveBranding({ pluginConfig: { darkSidebar: false } })).darkSidebar).toBe(false);
        delete process.env[ENV];
        expect((await serveBranding({ pluginConfig: { darkSidebar: true } })).darkSidebar).toBe(true);
    });

    it('a saved setting outranks the deployment, in both directions', async () => {
        const on = newStub({ saved: { dark_sidebar_enabled: { value: true, source: 'tenant' } } });
        expect((await serveBranding({ settings: settingsService(on) })).darkSidebar).toBe(true);
        expect(on.calls[0]).toContain('dark_sidebar_enabled');

        const off = newStub({ saved: { dark_sidebar_enabled: { value: false, source: 'tenant' } } });
        expect((await serveBranding({ settings: settingsService(off), pluginConfig: { darkSidebar: true } })).darkSidebar)
            .toBe(false);
    });

    it('an env-pinned setting (source env) is served', async () => {
        const pinned = newStub({ saved: { dark_sidebar_enabled: { value: true, source: 'env' } } });
        expect((await serveBranding({ settings: settingsService(pinned) })).darkSidebar).toBe(true);
    });

    it('a non-boolean stored value is treated as unset, never coerced', async () => {
        const odd = newStub({ saved: { dark_sidebar_enabled: { value: 'true', source: 'tenant' } } });
        expect((await serveBranding({ settings: settingsService(odd) })).darkSidebar).toBe(false);
    });

    it('under a walled posture the namespace is not read, and the env var still applies', async () => {
        process.env[ENV] = 'true';
        const walled = newStub({ offered: false, saved: { dark_sidebar_enabled: { value: false, source: 'tenant' } } });
        expect((await serveBranding({ settings: settingsService(walled) })).darkSidebar).toBe(true);
        expect(walled.calls).toEqual([]);
    });
});
