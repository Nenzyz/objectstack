/**
 * ObjectUI
 * Copyright (c) 2024-present ObjectStack Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * A synthesized `{ group }` section heading reads the locale's
 * `objects.<object>._sections.<group key>.label` row, and keeps the declared
 * English `fieldGroups[].label` only where that row is absent.
 */
import * as React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, cleanup, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { I18nProvider, createI18n } from '@object-ui/i18n';
import { RecordContextProvider, SchemaRenderer } from '@object-ui/react';
import {
  assertNoOtherNetworkEscape,
  installRecordSecurityExplainDouble,
} from '@object-ui/test-support';
// Registry entries must be resolved before the assertions run.
import '@object-ui/components';
import '@object-ui/fields';
import '../index';
import { buildDefaultPageSchema } from '../synth/buildDefaultPageSchema';

const OBJECT = 'crm_account';

const objectDef = {
  name: OBJECT,
  label: 'Account',
  highlightFields: ['website'],
  fieldGroups: [
    { key: 'basic_info', label: 'Basic Information' },
    { key: 'financials', label: 'Financial Details' },
  ],
  fields: {
    name: { label: 'Account Name', type: 'text' },
    website: { label: 'Website', type: 'url' },
    industry: { label: 'Industry', type: 'text', group: 'basic_info' },
    credit_terms: { label: 'Credit Terms', type: 'text', group: 'financials' },
  },
};

const RECORD = {
  id: 'A1', name: 'Acme', website: 'https://acme.test', industry: 'Manufacturing', credit_terms: 'Net 30',
};

beforeEach(() => installRecordSecurityExplainDouble(vi));
afterEach(() => {
  assertNoOtherNetworkEscape(expect);
  cleanup();
  vi.unstubAllGlobals();
});

function renderUnder(language: string, sections: Record<string, string>): HTMLElement {
  const instance = createI18n({
    defaultLanguage: language,
    detectBrowserLanguage: false,
    resources: {
      [language]: {
        app: {
          objects: {
            [OBJECT]: {
              _sections: Object.fromEntries(
                Object.entries(sections).map(([key, label]) => [key, { label }]),
              ),
            },
          },
        },
      },
    },
  });
  const { container } = render(
    <I18nProvider instance={instance}>
      <RecordContextProvider objectName={OBJECT} recordId="A1" data={RECORD} objectSchema={objectDef as never}>
        <SchemaRenderer schema={buildDefaultPageSchema(objectDef as never) as never} />
      </RecordContextProvider>
    </I18nProvider>,
  );
  const block = container.querySelector<HTMLElement>('[data-obj-type="record:details"]');
  expect(block).not.toBeNull();
  return block as HTMLElement;
}

describe('synthesized `{ group }` section headings translate per locale', () => {
  it('uk: each group heading reads its `_sections.<key>.label` row, not the declared English', () => {
    const block = renderUnder('uk', { basic_info: 'Основна інформація', financials: 'Фінансові дані' });
    expect(within(block).getByText('Основна інформація')).toBeInTheDocument();
    expect(within(block).getByText('Фінансові дані')).toBeInTheDocument();
    expect(within(block).queryByText('Basic Information')).toBeNull();
    expect(within(block).queryByText('Financial Details')).toBeNull();
  });

  it('a group without a translated row keeps its declared label', () => {
    const block = renderUnder('uk', { basic_info: 'Основна інформація' });
    expect(within(block).getByText('Основна інформація')).toBeInTheDocument();
    expect(within(block).getByText('Financial Details')).toBeInTheDocument();
  });
});
