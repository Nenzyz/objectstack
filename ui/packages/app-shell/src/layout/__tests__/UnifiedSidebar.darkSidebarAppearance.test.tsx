// Copyright (c) 2026 ObjectStack. Licensed under the Apache-2.0 license.

/**
 * The operator's dark-sidebar appearance (`branding.darkSidebar` on the
 * runtime config): off, the sidebar frame renders exactly as before; on, the
 * sidebar subtree sits under the `dark` token scope while the page body does
 * not, on desktop and inside the phone drawer's portal.
 *
 * Harness: the provider / chrome mocks of
 * `UnifiedSidebar.mobileAppHeader-12201.test.tsx`; `@object-ui/components`
 * stays REAL, and the option is set through the real `initRuntimeConfig()`.
 */

import '@testing-library/jest-dom/vitest';
import { afterEach, describe, it, expect, vi } from 'vitest';
import React from 'react';
import { readFileSync } from 'node:fs';
import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

vi.mock('@object-ui/i18n', async (importOriginal) => ({
  ...(await importOriginal<Record<string, unknown>>()),
  useObjectTranslation: () => ({
    t: (key: string, options?: Record<string, unknown>) => String(options?.defaultValue ?? key),
    language: 'en',
  }),
  useObjectLabel: () => ({
    objectLabel: ({ label }: { label?: string }) => label,
    viewLabel: (_o: string, _v: string, fallback?: string) => fallback,
    dashboardLabel: ({ label }: { label?: string }) => label,
    appLabel: ({ name, label }: { name: string; label?: string }) => label || name,
  }),
}));

vi.mock('@object-ui/auth', async (importOriginal) => ({
  ...(await importOriginal<Record<string, unknown>>()),
  useAuth: () => ({ user: null, activeOrganization: null }),
  useWorkspaceAdminStatus: () => ({ isAdmin: false, isResolved: true }),
}));

vi.mock('@object-ui/permissions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@object-ui/permissions')>()),
  usePermissions: () => ({ can: () => true, hasCapabilities: () => true }),
}));

const NAV = [{ id: 'n1', type: 'object', label: 'Leads', objectName: 'lead' }];
const PLAIN = { name: 'plain', label: 'Plain', icon: 'box', active: true, navigation: NAV };

let metadataState: { apps: unknown[]; objects: unknown[] } = { apps: [], objects: [] };
vi.mock('../../providers/MetadataProvider', () => ({
  useMetadata: () => metadataState,
}));

vi.mock('../../providers/ExpressionProvider', () => ({
  useExpressionContext: () => ({ evaluator: null }),
  evaluateVisibility: (expr: unknown) => expr !== false && expr !== 'false',
  evaluateNavigationVisibility: (expr: unknown) => expr !== false && expr !== 'false',
  useHasExpressionScope: () => true,
}));

vi.mock('../../utils', () => ({
  resolveKeyedI18nLabel: (label: unknown) => (typeof label === 'string' ? label : ''),
  matchAppBySegment: (apps: Array<{ name?: string }>, segment?: string) =>
    apps.find((a) => a?.name === segment),
  appRouteSegment: (app: { name?: string }) => app?.name,
}));

vi.mock('../../utils/getIcon', () => ({
  getIcon: (name?: string) => () => <svg data-icon={name ?? '(none)'} />,
}));
vi.mock('../../hooks/useRecentItems', () => ({ useRecentItems: () => ({ recentItems: [] }) }));
vi.mock('../../hooks/useFavorites', () => ({
  useFavorites: () => ({ favorites: [], removeFavorite: vi.fn() }),
}));
vi.mock('../../hooks/useNavPins', () => ({
  useNavPins: () => ({ togglePin: vi.fn(), applyPins: (items: unknown) => items }),
}));
vi.mock('../../hooks/useNavActionDispatch', () => ({
  useNavActionDispatch: () => vi.fn(),
}));
let navContext: { context: 'app' | 'home'; currentAppName: string } = { context: 'app', currentAppName: 'plain' };
vi.mock('../../context/NavigationContext', () => ({
  useNavigationContext: () => navContext,
}));
vi.mock('../ContextSelectors', () => ({
  useAppContextSelectors: () => ({ contextValues: {}, element: null }),
  contextSelectorQueryKey: (id: string) => (id === 'active_package' ? 'package' : id),
  STUDIO_PACKAGE_SELECTOR_ID: 'active_package',
}));
vi.mock('../LocalizedSidebarTrigger', () => ({
  LocalizedSidebarTrigger: () => null,
}));

import { SidebarProvider, useSidebar } from '@object-ui/components';
import { UnifiedSidebar } from '../UnifiedSidebar';
import { initRuntimeConfig, resetRuntimeConfigForTesting } from '../../runtime-config';

function OpenDrawer() {
  const { isMobile, setOpenMobile } = useSidebar();
  React.useEffect(() => {
    if (isMobile) setOpenMobile(true);
  }, [isMobile, setOpenMobile]);
  return null;
}

function setViewportWidth(width: number) {
  Object.defineProperty(window, 'innerWidth', { configurable: true, writable: true, value: width });
}

async function serveBranding(branding: Record<string, unknown>) {
  vi.stubGlobal('fetch', vi.fn(async () => ({ ok: true, json: async () => ({ branding }) })) as unknown as typeof fetch);
  await initRuntimeConfig();
}

function renderShell(width: number) {
  setViewportWidth(width);
  metadataState = { apps: [PLAIN], objects: [] };
  navContext = { context: 'app', currentAppName: 'plain' };
  return render(
    <MemoryRouter initialEntries={['/apps/plain']}>
      <SidebarProvider>
        <OpenDrawer />
        <UnifiedSidebar activeAppName="plain" />
        <main data-testid="page-body">Body</main>
      </SidebarProvider>
    </MemoryRouter>,
  );
}

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  resetRuntimeConfigForTesting();
  setViewportWidth(1024);
});

describe('dark sidebar appearance — off (the default)', () => {
  it('desktop: the frame keeps its exact class and gains no attribute; nothing is dark', async () => {
    await serveBranding({ productName: 'Acme' });
    renderShell(1280);
    const frame = screen.getByTestId('console-sidebar-frame');
    expect(frame.className).toBe('contents');
    expect(frame).not.toHaveAttribute('data-sidebar-appearance');
    expect(frame).not.toHaveAttribute('data-sidebar-scale');
    expect(document.querySelector('.dark')).toBeNull();
    expect(screen.getByText('Leads')).toBeInTheDocument();
  });

  it('phone drawer: no scope element is added around the drawer content', async () => {
    await serveBranding({ darkSidebar: false });
    renderShell(375);
    await screen.findByText('Leads');
    expect(document.querySelector('[data-sidebar-appearance]')).toBeNull();
    expect(document.querySelector('[data-sidebar-scale]')).toBeNull();
    expect(document.querySelector('.dark')).toBeNull();
  });
});

describe('dark sidebar appearance — on', () => {
  it('desktop: the sidebar subtree is under the dark scope and the page body is not', async () => {
    await serveBranding({ darkSidebar: true });
    renderShell(1280);
    const frame = screen.getByTestId('console-sidebar-frame');
    expect(frame).toHaveClass('dark');
    expect(frame).toHaveAttribute('data-sidebar-appearance', 'dark');
    const sidebar = document.querySelector<HTMLElement>('[data-sidebar="sidebar"]')!;
    expect(sidebar.closest('.dark')).toBe(frame);
    expect(screen.getByText('Leads').closest('.dark')).toBe(frame);
    expect(screen.getByTestId('page-body').closest('.dark')).toBeNull();
    expect(document.documentElement).not.toHaveClass('dark');
    expect(document.body).not.toHaveClass('dark');
  });

  it('phone drawer: the portaled drawer content carries its own dark scope, painted with the sidebar tokens', async () => {
    await serveBranding({ darkSidebar: true });
    renderShell(375);
    const leads = await screen.findByText('Leads');
    const scope = leads.closest<HTMLElement>('[data-sidebar-appearance="dark"]')!;
    expect(scope).not.toBeNull();
    expect(scope).toHaveClass('dark', 'bg-sidebar', 'text-sidebar-foreground', 'h-full', 'w-full');
    expect(scope.closest('[data-mobile="true"]')).not.toBeNull();
    expect(screen.getByTestId('page-body').closest('.dark')).toBeNull();
  });
});

describe('sidebar size preset', () => {
  it.each(['large', 'x-large'] as const)('desktop: %s puts its preset on the frame, and nothing on the page body', async (scale) => {
    await serveBranding({ sidebarScale: scale });
    renderShell(1280);
    const frame = screen.getByTestId('console-sidebar-frame');
    expect(frame).toHaveAttribute('data-sidebar-scale', scale);
    expect(frame.className).toBe('contents');
    expect(frame).not.toHaveAttribute('data-sidebar-appearance');
    expect(screen.getByTestId('page-body').closest('[data-sidebar-scale]')).toBeNull();
  });

  it.each([['default'], ['huge'], [1.25], [undefined]])('an explicit default or unknown preset %j renders today\'s frame', async (scale) => {
    await serveBranding({ sidebarScale: scale });
    renderShell(1280);
    const frame = screen.getByTestId('console-sidebar-frame');
    expect(frame).not.toHaveAttribute('data-sidebar-scale');
    expect(frame.className).toBe('contents');
  });

  it('phone drawer: the portaled content carries the preset without going dark', async () => {
    await serveBranding({ sidebarScale: 'x-large' });
    renderShell(375);
    const scope = (await screen.findByText('Leads')).closest<HTMLElement>('[data-sidebar-scale="x-large"]')!;
    expect(scope).not.toBeNull();
    expect(scope).not.toHaveClass('dark');
    expect(scope).not.toHaveAttribute('data-sidebar-appearance');
  });

  it('combines with the dark sidebar, on desktop and in the drawer', async () => {
    await serveBranding({ darkSidebar: true, sidebarScale: 'large' });
    renderShell(1280);
    const frame = screen.getByTestId('console-sidebar-frame');
    expect(frame).toHaveClass('dark');
    expect(frame).toHaveAttribute('data-sidebar-appearance', 'dark');
    expect(frame).toHaveAttribute('data-sidebar-scale', 'large');
    cleanup();
    renderShell(375);
    const scope = (await screen.findByText('Leads')).closest<HTMLElement>('[data-sidebar-scale="large"]')!;
    expect(scope).toHaveClass('dark', 'bg-sidebar');
    expect(scope).toHaveAttribute('data-sidebar-appearance', 'dark');
  });
});

describe('a nested dark scope re-resolves every colour token the host theme maps', () => {
  // `@theme` resolves `--color-*` once at `:root`; a nested `.dark` must
  // redeclare each mapping or the light value is inherited inside it.
  const read = (rel: string) => readFileSync(new URL(rel, import.meta.url), 'utf8');
  const mappings = (css: string) =>
    new Set([...css.matchAll(/(--color-[a-z0-9-]+):\s*hsl\(var\((--[a-z0-9-]+)\)\)/g)].map((m) => `${m[1]}=${m[2]}`));

  it('styles.css redeclares every console @theme colour mapping on .dark:not(:root)', () => {
    const consoleCss = read('../../../../../apps/console/src/index.css');
    const themeBlock = consoleCss.slice(consoleCss.indexOf('@theme {'), consoleCss.indexOf('}', consoleCss.indexOf('@theme {')));
    const theme = mappings(themeBlock);
    expect(theme.size).toBeGreaterThan(20);

    const shellCss = read('../../styles.css');
    const at = shellCss.indexOf('.dark:not(:root) {');
    expect(at).toBeGreaterThan(-1);
    const scoped = mappings(shellCss.slice(at, shellCss.indexOf('}', at)));
    expect([...theme].filter((m) => !scoped.has(m))).toEqual([]);
  });
});

describe('styles.css: the scoped sidebar rules', () => {
  // jsdom computes no cascade, so these pin the rule text the browser applies.
  const css = readFileSync(new URL('../../styles.css', import.meta.url), 'utf8');
  const block = (selectorStart: string) => {
    const at = css.indexOf(selectorStart);
    expect(at, selectorStart).toBeGreaterThan(-1);
    return css.slice(css.indexOf('{', at) + 1, css.indexOf('}', at));
  };

  it('the dark sidebar panel is painted opaque, in both the frame and the drawer form', () => {
    expect(css).toContain('[data-sidebar-appearance="dark"] [data-sidebar="sidebar"],\n[data-sidebar="sidebar"] [data-sidebar-appearance="dark"] {');
    const body = block('[data-sidebar-appearance="dark"] [data-sidebar="sidebar"],');
    expect(body.trim()).toBe('background-color: hsl(var(--sidebar)) !important;');
  });

  it.each([['large', '1.125'], ['x-large', '1.25']])('preset %s is the factor %s', (preset, factor) => {
    expect(block(`[data-sidebar-scale="${preset}"] {`).trim()).toBe(`--sidebar-scale: ${factor};`);
  });

  it('the factor drives the spacing and text tokens on the panel, and the collapsed rail width', () => {
    const panel = block('[data-sidebar-scale] [data-sidebar="sidebar"],');
    for (const token of ['--spacing: calc(0.25rem', '--text-xs: calc(0.75rem', '--text-sm: calc(0.875rem', '--text-base: calc(1rem']) {
      expect(panel).toContain(`${token} * var(--sidebar-scale))`);
    }
    expect(block('[data-sidebar-scale] {')).toContain('--sidebar-width-icon: calc(3rem * var(--sidebar-scale))');
  });
});
