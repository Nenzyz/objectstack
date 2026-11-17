---
'@objectstack/service-settings': patch
'@objectstack/cloud-connection': patch
'@object-ui/app-shell': patch
---

feat(console): an operator can render the Console's navigation sidebar dark while the page body stays light

Clause-②: yes (widening) — a new optional Branding setting `dark_sidebar_enabled` (toggle, off by default), a new `darkSidebar` option on `RuntimeConfigPlugin`, a new always-boolean `branding.darkSidebar` on `GET /api/v1/runtime/config`, and a new `isDarkSidebarEnabled()` reader in app-shell; nothing that worked before is refused
Metadata-protocol: none

**Setup → Branding → Dark sidebar** (`branding.dark_sidebar_enabled`) renders the Console's navigation sidebar with the dark theme colours while the page body keeps the user's theme. It is off by default, and with it off every page renders exactly as before.

Operators set it from outside with `OS_BRANDING_DARK_SIDEBAR_ENABLED=true` (`1` and `yes` also read as on). Under the `single` tenancy posture this is the settings layer's own override of the toggle, so it locks the field in Setup; under `group` / `isolated`, where the Branding namespace is not offered, the runtime config reads the same variable directly. A host can also pass `new RuntimeConfigPlugin({ darkSidebar: true })`. Precedence: a set setting, then the host option, then the variable, then off.

The sidebar takes the existing `dark` class on its frame, and on a phone on the drawer content, so the existing dark token set applies to the sidebar subtree only; no new colours are introduced. `@object-ui/app-shell/styles.css` redeclares the theme's `--color-*` mappings on a nested `.dark` so they re-resolve inside it. When the user is already in dark mode the option changes nothing.
