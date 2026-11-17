---
'@objectstack/service-settings': patch
'@objectstack/cloud-connection': patch
'@object-ui/app-shell': patch
---

feat(console): an operator can render the Console's navigation sidebar dark while the page body stays light, and make its text and icons larger

Clause-②: yes (widening) — two new optional Branding settings, `dark_sidebar_enabled` (toggle, off by default) and `sidebar_scale` (`default` | `large` | `x-large`, `default` by default); new `darkSidebar` and `sidebarScale` options on `RuntimeConfigPlugin`; an always-present `branding.darkSidebar` / `branding.sidebarScale` on `GET /api/v1/runtime/config`; and new `isDarkSidebarEnabled()` / `getSidebarScale()` readers in app-shell; nothing that worked before is refused
Metadata-protocol: none

**Setup → Branding → Dark sidebar** (`branding.dark_sidebar_enabled`) renders the Console's navigation sidebar with the dark theme colours while the page body keeps the user's theme. It is off by default, and with it off every page renders exactly as before.

Operators set it from outside with `OS_BRANDING_DARK_SIDEBAR_ENABLED=true` (`1` and `yes` also read as on). Under the `single` tenancy posture this is the settings layer's own override of the toggle, so it locks the field in Setup; under `group` / `isolated`, where the Branding namespace is not offered, the runtime config reads the same variable directly. A host can also pass `new RuntimeConfigPlugin({ darkSidebar: true })`. Precedence: a set setting, then the host option, then the variable, then off.

The sidebar takes the existing `dark` class on its frame, and on a phone on the drawer content, so the existing dark token set applies to the sidebar subtree only; no new colours are introduced. Inside that scope the sidebar panel is opaque, even where the theme draws it as a translucent material, and the active row's label uses the sidebar foreground colour, so text and the active bar meet WCAG AA against the dark panel. `@object-ui/app-shell/styles.css` redeclares the theme's `--color-*` mappings on a nested `.dark` so they re-resolve inside it. When the user is already in dark mode the option changes nothing.

**Setup → Branding → Sidebar size** (`branding.sidebar_scale`, env `OS_BRANDING_SIDEBAR_SCALE`, host option `sidebarScale`) enlarges the sidebar's text, icons, rows, group labels and collapsed rail by ×1.125 (`large`) or ×1.25 (`x-large`). The page body keeps its size. It works by scaling the Tailwind spacing and text tokens inside the sidebar panel. An unknown value is served as `default`, and an unrecognised host option or env value is named in a startup warning. It combines with the dark sidebar and with global dark mode.
