---
'@object-ui/console': patch
---

fix(console): the Default currency setting offers every ISO 4217 currency in a searchable picker

Clause-②: no
Metadata-protocol: none

**Localization → Default currency** used to draw a free-text box whose dropdown suggested only the nine currencies the manifest lists (USD, EUR, GBP, JPY, CNY, INR, AUD, CAD, BRL). The server already accepted any ISO 4217 code, but an administrator could not see that a currency such as UAH was available unless they typed its code by hand.

The setting now draws the Console's shared currency picker (`CurrencyCodePicker`, the one record currency fields use). It lists every code the `iso_4217_currency` value domain accepts, labelled `CODE — Name` in the Console language, and the list can be searched by code or by name. The first-run checklist's currency row uses the same picker. To unset the setting, use the row's Reset, as before.

Other settings that declare a value domain (time zone, default country) keep the free-text box with suggestions.
