---
'@object-ui/plugin-form': patch
'@object-ui/app-shell': patch
'@object-ui/types': patch
---

feat(form): record forms default `validationMode` to `onTouched`

Record forms (`ModalForm`, `DrawerForm`, `RecordFormPage`) now default to `validationMode: 'onTouched'`: a touched field validates on blur and re-validates as it changes, while untouched fields stay quiet until Save, which still reports every error and focuses the first. `ObjectForm` now forwards `schema.validationMode` to the renderer, and a caller-supplied value wins. The renderer's own default stays `'onSubmit'`, so embedded forms elsewhere are unchanged.

Clause-②: no
