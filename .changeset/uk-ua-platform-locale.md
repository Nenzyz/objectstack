---
'@objectstack/spec': minor
'@objectstack/platform-objects': patch
'@objectstack/plugin-approvals': patch
'@objectstack/plugin-audit': patch
'@objectstack/plugin-security': patch
'@objectstack/plugin-sharing': patch
'@objectstack/plugin-webhooks': patch
'@objectstack/plugin-email': patch
'@objectstack/service-settings': patch
'@objectstack/service-storage': patch
'@objectstack/service-datasource': patch
'@objectstack/service-mailbox': patch
'@objectstack/service-messaging': patch
'@objectstack/service-realtime': patch
'@object-ui/i18n': minor
'@object-ui/components': patch
'@object-ui/app-shell': patch
'@objectstack/console': patch
---

uk joins the platform locale table, and every surface that serves the table's languages now serves Ukrainian

`@objectstack/spec`'s `PLATFORM_LOCALES` gains the `uk` row (native label Українська, after `ru`) and `PLATFORM_LOCALE_READ_ALIASES` gains `uk-UA → uk`, so a Ukrainian reader's `Accept-Language` resolves the new pack. The Console ships a `uk` catalogue (pack plus marketplace and developer namespaces), platform metadata and every bundle-carrying package ship Ukrainian translations, the Setup language menus list it, and the read-alias map keeps stored `uk-UA` values resolving.

UI fixes found evaluating uk-UA, which hold in every locale:

- The record grid's `#` row-hover "open" control is an icon-only link (`ExternalLink`, `aria-label`, screen-reader text) in place of the text label, so the 40px cell never clips `Відкрити`, `Открыть`, `Öffnen` or `Ouvrir`.
- The active Unread/All pill in the inbox popover pairs `bg-accent` with `text-accent-foreground`, so a brand `accentColor` keeps readable contrast.
- Select-option labels (the `record:path` stage strip among them) resolve from `objects.<object>.fields.<field>.options.<value>`, the row the server and the per-locale bundles emit, as well as from the adapter's `fieldOptions.<object>.<field>.<value>`; before, only the second was read, so stage labels stayed English while the Status field translated.
- Pins for two paths that already resolve correctly: a synthesized `{ group }` heading reads `objects.<object>._sections.<group key>.label` in the reader's locale (an object whose uk bundle carries no such row keeps its declared English `fieldGroups[].label`, which is a missing translation row, not a renderer fault), and the activity-feed "Created <Object> …" sentence reads the `uk` and `uk-UA` pack.

Downstream notes from integrating the pack into an extension package, for the package maintainers:

- On a case-insensitive filesystem (macOS) `apps/console` fails to build because `DeploymentNotice.tsx` and `deploymentNotice.ts` differ only by case; one of the two needs renaming.
- ADR-0146 D10's `BASE_FIELD_DISPLAY_WHITELIST` refuses `hidden: true` from an extension package on a shadowed upstream field, so an extension cannot hide a base field it overrides.
- Lint rules that exist only on unreleased `main` (`field-label-duplicate`) already fire on packages still versioned 18.4.0, so a package pinned to the release sees findings its pinned linter cannot explain.

Clause-②: no (widening)
Metadata-protocol: added

Migration: none. A stored `sys_user.locale` of `uk-UA` now selects Ukrainian instead of falling through to English; no other stored value changes meaning. To undo, drop the `uk` row and the `uk-UA` alias from the platform locale table.
