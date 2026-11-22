/**
 * ObjectUI
 * Copyright (c) 2024-present ObjectStack Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * `stickyActions` — a page form pins its action row to the viewport bottom at
 * EVERY viewport (unlike `mobileStickyActions`, which resets at `md`).
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ComponentRegistry } from '@object-ui/core';
import '../../renderers';

const fields = [{ name: 'name', label: 'Name', type: 'input' }];

function renderForm(extra: Record<string, unknown> = {}) {
  const Form = ComponentRegistry.get('form')!;
  return render(<Form schema={{ type: 'form', showCancel: true, fields, ...extra }} />);
}

describe('form renderer — stickyActions', () => {
  it('pins the action row sticky bottom-0 with no md reset', () => {
    renderForm({ stickyActions: true });
    const row = screen.getByTestId('form-sticky-actions');
    expect(row).toHaveClass('sticky', 'bottom-0');
    expect(row.className).not.toContain('md:static');
    expect(row).toContainElement(screen.getByRole('button', { name: 'Submit' }));
  });

  it('leaves the DOM unchanged without the key', () => {
    renderForm();
    expect(screen.queryByTestId('form-sticky-actions')).toBeNull();
    const row = screen.getByRole('button', { name: 'Submit' }).parentElement!;
    expect(row.className).not.toContain('sticky');
  });
});
