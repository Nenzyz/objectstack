// Copyright (c) 2025 ObjectStack. Licensed under the Apache-2.0 license.

import type { SettingsManifest } from '@objectstack/spec/system';

/**
 * Branding — the name, logo and brand colour a single-organization deployment
 * shows (#24766, the maintainer's ruling B′ and its amendment).
 *
 * ## Who reads each key
 *
 * The console learns its brand from `GET /api/v1/runtime/config`
 * (`RuntimeConfigPlugin`, `@objectstack/cloud-connection`), which reads this
 * namespace on every request, so a save shows on the next page load:
 *
 *  - `workspace_name` → `branding.productName`: the product name in the
 *    console chrome, on the sign-in page and in the browser title. It also
 *    keeps its earlier reader, `plugin-auth`, which uses it as the product name
 *    in sign-in emails, the authenticator app entry and the MCP sign-in, and
 *    `plugin-email` names a mail sender that has no From name with it.
 *  - `logo_url` → `branding.logoUrl`: the sign-in page, the loading screen and
 *    the home header.
 *  - `accent_color` → `branding.brandColor`: the browser and installed-app
 *    (PWA) theme colour. It is not an app's colour: each app keeps the colours
 *    its own `AppBranding` declares, and no precedence between the two exists.
 *  - `dark_sidebar_enabled` → `branding.darkSidebar`: the console's
 *    navigation sidebar renders with the dark theme tokens while the page body
 *    keeps the user's theme. Off unless set; under the dark theme it changes
 *    nothing, because the sidebar is dark already. The operator pins it with
 *    `OS_BRANDING_DARK_SIDEBAR_ENABLED=true`, the settings layer's own env
 *    override, which the runtime config also reads directly where this
 *    namespace is not offered (a walled posture).
 *  - `sidebar_scale` → `branding.sidebarScale`: the console's navigation
 *    sidebar draws its text, icons, rows and collapsed rail at `default`,
 *    `large` or `x-large`; the page body keeps its size. Pinned with
 *    `OS_BRANDING_SIDEBAR_SCALE`, read the same two ways as the dark sidebar.
 *
 * A value nobody saved (`source: 'default'`) is not served: the deployment's
 * own branding applies (`OS_PRODUCT_NAME`, `OS_LOGO_URL`, `OS_BRAND_COLOR`, or
 * the host's `RuntimeConfigPlugin` options; `OS_APP_NAME` for the auth
 * readers). That is why no text key here declares a `default`: a default would
 * be shown on the settings page as a value the console never uses. The two
 * appearance keys do declare one — `dark_sidebar_enabled: false` and
 * `sidebar_scale: 'default'` — because that IS what the console does when
 * nothing is set, and the settings layer coerces an env override by the
 * declared default's type. The name's
 * `'ObjectStack'` default did exactly that (#25347): an unsaved page read
 * "ObjectStack" while the console read "ObjectOS". So `workspace_name` is not
 * `required` either: an empty value means "use the deployment's name", and
 * both readers already treat an empty value as unset.
 *
 * ## The product's name, not the organization's
 *
 * `workspace_name` names the PRODUCT the deployment shows. The organization's
 * own name is `sys_organization.name`, the Name on the Organization record
 * (#25347). Two names, two homes, and each label says which one it is: the
 * label here is "Product name", never "Organization name", and its help points
 * at the record.
 *
 * ## Single posture only
 *
 * Under a walled tenancy posture (`group` / `isolated`) the settings service
 * does not offer this namespace at all — it is absent from the settings
 * listing and a write to it is refused `404 UNKNOWN_NAMESPACE`
 * (`settings-service-plugin.ts`). The runtime-config door is anonymous and
 * resolves no organization before sign-in, so there the deployment's branding
 * is the operator's, through the `OS_*` variables above.
 *
 * ## Version 2
 *
 * `theme_mode` and `support_email` were offered here until #24766 and nothing
 * ever read them; the runtime config has no counterpart for either, so they
 * were retired rather than implemented. Removing them is why `version` is 2:
 * the spec's `SettingsManifest.version` contract is "increment when keys are
 * renamed/removed". A `sys_setting` row stored for one of them is kept, never
 * deleted: the service no longer resolves it, and a write naming the key is
 * refused `400 UNKNOWN_KEY`, the answer every undeclared key gets.
 */
export const brandingSettingsManifest: SettingsManifest = {
  namespace: 'branding',
  version: 2,
  label: 'Branding',
  icon: 'Palette',
  description:
    'The name, logo and colour the console and the sign-in page show. ' +
    'A value left unset falls back to the deployment\'s own branding.',
  scope: 'tenant',
  readPermission: 'setup.access',
  writePermission: 'setup.write',
  category: 'Workspace',
  order: 5,
  specifiers: [
    { type: 'group', id: 'identity', label: 'Identity', required: false },
    { type: 'text', key: 'workspace_name', label: 'Product name', required: false,
      minLength: 1, maxLength: 60,
      description:
        'The product name in the console, on the sign-in page and in the browser title, ' +
        'and in sign-in emails, the authenticator app and MCP sign-in. ' +
        'Leave empty to use the name this deployment was set up with. ' +
        'This is not the organization\'s own name, which is the Name on the Organization record.' },

    { type: 'group', id: 'appearance', label: 'Appearance', required: false },
    { type: 'color', key: 'accent_color', label: 'Accent colour', required: false,
      description: 'The browser and installed-app theme colour. Each app keeps its own colours.' },
    { type: 'url', key: 'logo_url', label: 'Logo URL', required: false,
      description: 'Shown on the sign-in page, the loading screen and the home header. Example: https://…/logo.svg' },
    { type: 'toggle', key: 'dark_sidebar_enabled', label: 'Dark sidebar', required: false, default: false,
      description:
        'Shows the console navigation sidebar in dark colours while pages stay light. ' +
        'A user who already chose the dark theme sees no change.' },
    { type: 'select', key: 'sidebar_scale', label: 'Sidebar size', required: false, default: 'default',
      description:
        'Makes the text and icons of the console navigation sidebar larger. The page itself keeps its size.',
      options: [
        { value: 'default', label: 'Default' },
        { value: 'large', label: 'Large' },
        { value: 'x-large', label: 'Extra large' },
      ] },
  ],
};
