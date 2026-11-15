/**
 * `translateOptions` / `fieldOptionLabel` read the option label from the shape
 * the server and the per-locale bundles emit,
 * `objects.<obj>.fields.<fld>.options.<value>`, as well as from the adapter
 * shape `fieldOptions.<obj>.<fld>.<value>`.
 */
import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import React from 'react';
import { I18nProvider, useObjectTranslation } from '../provider';
import { useObjectLabel } from '../useObjectLabel';

function hookWith(app: Record<string, unknown>) {
  const { result } = renderHook(
    () => ({ labels: useObjectLabel(), i18n: useObjectTranslation().i18n }),
    {
      wrapper: ({ children }: { children: React.ReactNode }) =>
        React.createElement(I18nProvider, {
          config: { defaultLanguage: 'uk', detectBrowserLanguage: false },
          persistLanguage: false,
          children,
        }),
    },
  );
  result.current.i18n.addResourceBundle('uk', 'translation', { crm: app }, true, true);
  return result.current.labels;
}

const STAGES = [
  { value: 'new', label: 'New' },
  { value: 'qualified', label: 'Qualified' },
];

describe('option labels resolve from objects.<obj>.fields.<fld>.options.<value>', () => {
  const bundle = {
    objects: { crm_lead: { fields: { status: { options: { new: 'Новий' } } } } },
  };

  it('translateOptions translates the options the bundle carries and keeps the rest', () => {
    const labels = hookWith(bundle);
    expect(labels.translateOptions('crm_lead', 'status', STAGES).map((o) => o.label))
      .toEqual(['Новий', 'Qualified']);
  });

  it('fieldOptionLabel reads the same row', () => {
    expect(hookWith(bundle).fieldOptionLabel('crm_lead', 'status', 'new', 'New')).toBe('Новий');
  });

  it('a namespaced object resolves a bundle keyed by its short name', () => {
    const labels = hookWith({
      objects: { lead: { fields: { status: { options: { new: 'Новий' } } } } },
    });
    expect(labels.fieldOptionLabel('crm__lead', 'status', 'new', 'New')).toBe('Новий');
  });

  it('the adapter shape `fieldOptions.<obj>.<fld>.<value>` still resolves', () => {
    const labels = hookWith({ objects: {}, fieldOptions: { crm_lead: { status: { new: 'Новий' } } } });
    expect(labels.fieldOptionLabel('crm_lead', 'status', 'new', 'New')).toBe('Новий');
  });
});
