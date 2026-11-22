---
'@object-ui/types': patch
'@object-ui/components': patch
'@object-ui/plugin-form': patch
'@object-ui/app-shell': patch
---

feat(app-shell): the full-page record form guards unsaved edits and pins its Save / Cancel bar

Clause-②: no
Metadata-protocol: none

- **Leave guard.** `RecordFormPage` now registers its unsaved input with the unsaved-edits seam while the form is edited: an in-app link, the header's menus, the Back button and a tab close ask "You have unsaved changes. Are you sure you want to leave?" first. A pristine form, a successful save and Cancel register nothing, so none of them prompts. `ObjectForm` chains a host's `schema.onDirtyChange` after its own record-invalidation report at both hand-off sites.
- **Sticky action bar.** A form given `stickyActions: true` pins its Save / Cancel row to the bottom of the viewport at every viewport (`data-testid="form-sticky-actions"`), so it stays reachable on a long page form. Without the key the DOM is unchanged. `RecordFormPage` sets it.

Both keys are package-local hand-off slots on `FormSchema` / `ObjectFormSchema`; nothing is added to `@objectstack/spec`.
