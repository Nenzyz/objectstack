/**
 * ObjectUI
 * Copyright (c) 2024-present ObjectStack Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * The full-page record form guards unsaved edits: it registers with the
 * unsaved-edits seam while dirty, and releases on save / cancel.
 */

import '@testing-library/jest-dom/vitest';
import * as React from 'react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup, fireEvent, act } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { RecordFormPage } from './RecordFormPage';
import { confirmUnsavedLeave } from '../chrome/unsavedEdits';

vi.mock('@object-ui/auth', async (importOriginal) => ({
  ...(await importOriginal<Record<string, unknown>>()),
  useAuth: () => ({
    user: { id: 'u1', name: 'Ada', email: 'ada@example.com', role: 'admin' },
    getAuthConfig: async () => ({ features: {} }),
    activeOrganization: null,
  }),
}));

// Stand-in form: an input that reports dirty, plus save / cancel triggers.
vi.mock('@object-ui/plugin-form', async (importOriginal) => ({
  ...(await importOriginal<Record<string, unknown>>()),
  ObjectForm: ({ schema }: { schema: any }) => (
    <div>
      <span data-testid="sticky">{String(schema.stickyActions)}</span>
      <input data-testid="name" onChange={() => schema.onDirtyChange?.(true)} />
      <button onClick={() => schema.onSuccess?.({ id: 'n1' })}>save</button>
      <button onClick={() => schema.onCancel?.()}>cancel</button>
    </div>
  ),
}));

vi.mock('../providers/MetadataProvider', async (importOriginal) => ({
  ...(await importOriginal<Record<string, unknown>>()),
  useMetadata: () => ({
    objects: [{ name: 'crm_lead', label: 'Lead', editMode: 'page', fields: { name: { type: 'text' } } }],
    loading: false,
  }),
}));
vi.mock('../providers/AdapterProvider', () => ({ useAdapter: () => null }));

// jsdom ships no `window.confirm`; stub it as a declined prompt.
function stubConfirm() {
  const confirm = vi.fn(() => false);
  vi.stubGlobal('confirm', confirm);
  return confirm;
}

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

function renderCreate() {
  render(
    <MemoryRouter initialEntries={['/apps/demo/crm_lead/new']}>
      <Routes>
        <Route path="/apps/:appName/:objectName/new" element={<RecordFormPage mode="create" />} />
        <Route path="*" element={<div>elsewhere</div>} />
      </Routes>
    </MemoryRouter>,
  );
}

describe('RecordFormPage leave guard', () => {
  it('a pristine form registers nothing', () => {
    const confirm = stubConfirm();
    renderCreate();
    const go = vi.fn();
    confirmUnsavedLeave(go);
    expect(go).toHaveBeenCalledTimes(1);
    expect(confirm).not.toHaveBeenCalled();
  });

  it('a dirty form asks before leaving; declining keeps the page', () => {
    const confirm = stubConfirm();
    renderCreate();
    fireEvent.change(screen.getByTestId('name'), { target: { value: 'x' } });
    const go = vi.fn();
    confirmUnsavedLeave(go);
    expect(confirm).toHaveBeenCalledTimes(1);
    expect(go).not.toHaveBeenCalled();
  });

  it('after a successful save nothing is registered', () => {
    const confirm = stubConfirm();
    renderCreate();
    fireEvent.change(screen.getByTestId('name'), { target: { value: 'x' } });
    fireEvent.click(screen.getByText('save'));
    const go = vi.fn();
    confirmUnsavedLeave(go);
    expect(go).toHaveBeenCalledTimes(1);
    expect(confirm).not.toHaveBeenCalled();
  });

  it('Cancel releases the guard and does not prompt', () => {
    const confirm = stubConfirm();
    renderCreate();
    fireEvent.change(screen.getByTestId('name'), { target: { value: 'x' } });
    fireEvent.click(screen.getByText('cancel'));
    expect(confirm).not.toHaveBeenCalled();
    const go = vi.fn();
    confirmUnsavedLeave(go);
    expect(go).toHaveBeenCalledTimes(1);
    expect(confirm).not.toHaveBeenCalled();
  });

  it('hands the sticky action bar key to ObjectForm', () => {
    renderCreate();
    expect(screen.getByTestId('sticky')).toHaveTextContent('true');
  });
});
