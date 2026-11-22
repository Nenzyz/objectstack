/**
 * ObjectUI
 * Copyright (c) 2024-present ObjectStack Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * `stickyActions` must survive the SECTIONED path of `ObjectForm`.
 * `renderSectionedForm` builds its own form schema; it once dropped the flag, so
 * every sectioned record form kept an inline (non-sticky) action bar.
 */

import { describe, it, expect, vi } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { registerAllFields } from '@object-ui/fields';
import { ObjectForm } from '../ObjectForm';

registerAllFields();

const OBJECT_SCHEMA = {
  name: 'invoice',
  fields: {
    customer: { type: 'text', label: 'Customer' },
    note: { type: 'text', label: 'Note' },
  },
};

const makeDataSource = () =>
  ({
    getObjectSchema: vi.fn().mockResolvedValue(OBJECT_SCHEMA),
    findOne: vi.fn(),
    create: vi.fn(),
    update: vi.fn(),
  }) as any;

async function mount(extra: Record<string, unknown>): Promise<HTMLElement> {
  const { container } = render(
    <ObjectForm
      schema={
        {
          type: 'object-form',
          objectName: 'invoice',
          mode: 'create',
          sections: [
            { label: 'Main', fields: ['customer'] },
            { label: 'More', fields: ['note'] },
          ],
          ...extra,
        } as any
      }
      dataSource={makeDataSource()}
    />,
  );
  await waitFor(() => {
    if (!container.querySelector('form')) throw new Error('not ready');
  });
  return container as HTMLElement;
}

describe('sectioned object-form — stickyActions', () => {
  it('renders the sticky action bar when stickyActions is true', async () => {
    const c = await mount({ stickyActions: true });
    expect(c.querySelector('[data-testid="form-sticky-actions"]')).not.toBeNull();
  });

  it('renders no sticky bar when stickyActions is absent (control)', async () => {
    const c = await mount({});
    expect(c.querySelector('[data-testid="form-sticky-actions"]')).toBeNull();
  });
});
