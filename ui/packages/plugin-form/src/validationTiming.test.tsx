/**
 * ObjectUI
 * Copyright (c) 2024-present ObjectStack Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * The modal record host validates on touch: a required field shows its error when it is
 * blurred empty, clears as soon as it has a value, and stays quiet while
 * untouched until Save. The renderer's own default stays `onSubmit`.
 */
import '@testing-library/jest-dom/vitest';
import React from 'react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, waitFor, cleanup, fireEvent } from '@testing-library/react';
import { registerAllFields } from '@object-ui/fields';
import { ModalForm, type ModalFormProps, type ModalFormSchema } from './ModalForm';

registerAllFields();

const OBJECT = {
  name: 'crm_lead',
  label: 'Lead',
  editMode: 'page',
  fields: {
    name: { type: 'text', label: 'Name', required: true },
    note: { type: 'text', label: 'Note' },
  },
};

const ds = {
  getObjectSchema: vi.fn().mockResolvedValue(OBJECT),
  findOne: vi.fn().mockResolvedValue(null),
  find: vi.fn().mockResolvedValue({ data: [] }),
  create: vi.fn(async (_o: string, d: Record<string, unknown>) => ({ id: 'n1', ...d })),
  update: vi.fn(),
};

afterEach(cleanup);

const REQUIRED = /required/i;

function renderModal() {
  const schema: ModalFormSchema = {
    type: 'object-form',
    formType: 'modal',
    objectName: 'crm_lead',
    mode: 'create',
    title: 'New Lead',
    open: true,
  };
  render(<ModalForm schema={schema} dataSource={ds as unknown as ModalFormProps['dataSource']} />);
}

const nameBox = () => document.body.querySelector('input[name="name"]') as HTMLInputElement | null;
const noteBox = () => document.body.querySelector('input[name="note"]') as HTMLInputElement | null;
const errors = () => screen.queryAllByText(REQUIRED);

describe('ModalForm validation timing', () => {
  const mount = renderModal;

  it('shows no error on open', async () => {
    mount();
    await waitFor(() => expect(nameBox()).not.toBeNull());
    expect(errors()).toHaveLength(0);
  });

  it('shows the required error when the field is blurred empty, no Save needed', async () => {
    mount();
    await waitFor(() => expect(nameBox()).not.toBeNull());
    fireEvent.focus(nameBox()!);
    fireEvent.blur(nameBox()!);
    await waitFor(() => expect(errors().length).toBeGreaterThan(0));
  });

  it('clears the error once a value is typed, without resubmitting', async () => {
    mount();
    await waitFor(() => expect(nameBox()).not.toBeNull());
    fireEvent.focus(nameBox()!);
    fireEvent.blur(nameBox()!);
    await waitFor(() => expect(errors().length).toBeGreaterThan(0));
    fireEvent.change(nameBox()!, { target: { value: 'Ada' } });
    await waitFor(() => expect(errors()).toHaveLength(0));
  });

  it('keeps an untouched field quiet until Save, which reports it and focuses it', async () => {
    mount();
    await waitFor(() => expect(nameBox()).not.toBeNull());
    fireEvent.focus(noteBox()!);
    fireEvent.blur(noteBox()!);
    expect(errors()).toHaveLength(0);
    fireEvent.click(document.body.querySelector('button[type="submit"]')!);
    await waitFor(() => expect(errors().length).toBeGreaterThan(0));
    await waitFor(() => expect(document.activeElement).toBe(nameBox()));
    expect(ds.create).not.toHaveBeenCalled();
  });
});
