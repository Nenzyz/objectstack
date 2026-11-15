---
'@objectstack/spec': minor
'@objectstack/platform-objects': patch
'@objectstack/plugin-approvals': patch
'@objectstack/plugin-audit': patch
'@objectstack/plugin-security': patch
'@objectstack/plugin-sharing': patch
'@objectstack/plugin-webhooks': patch
'@objectstack/service-settings': patch
'@objectstack/service-storage': patch
'@objectstack/service-datasource': patch
'@objectstack/service-mailbox': patch
'@objectstack/service-messaging': patch
'@objectstack/service-realtime': patch
'@objectui/i18n': minor
'@objectstack/console': patch
---

uk joins the platform locale table, and every surface that serves the table's languages now serves Ukrainian

`@objectstack/spec`'s `PLATFORM_LOCALES` gains the `uk` row (native label Українська, after `ru`) and `PLATFORM_LOCALE_READ_ALIASES` gains `uk-UA → uk`, so a Ukrainian reader's `Accept-Language` resolves the new pack. The Console ships a `uk` catalogue (pack plus marketplace and developer namespaces), platform metadata and every bundle-carrying package ship Ukrainian translations, the Setup language menus list it, and the read-alias map keeps stored `uk-UA` values resolving.

Clause-②: no (widening)
Metadata-protocol: added

Migration: none. A stored `sys_user.locale` of `uk-UA` now selects Ukrainian instead of falling through to English; no other stored value changes meaning. To undo, drop the `uk` row and the `uk-UA` alias from the platform locale table.
