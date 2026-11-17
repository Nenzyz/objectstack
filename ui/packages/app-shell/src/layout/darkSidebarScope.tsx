// Copyright (c) 2026 ObjectStack. Licensed under the Apache-2.0 license.

/**
 * The operator's dark-sidebar appearance: the navigation sidebar adopts the
 * dark theme tokens while the page body keeps the user's theme.
 *
 * The scope is the `dark` class itself, so the existing `.dark` token set,
 * every `dark:` variant and every `.dark …` rule apply inside it unchanged; no
 * colour is chosen here. `styles.css` re-resolves the Tailwind colour tokens on
 * a nested `.dark`, because `@theme` resolves them once at `:root`. Under the
 * dark theme the scope is a no-op: the tokens it adopts are already in force.
 */

import * as React from 'react';
import { DARK_SIDEBAR_SCOPE_CLASS, darkSidebarFrameProps } from './darkSidebarAppearance.js';

/**
 * The mobile drawer renders the sidebar into a portal, outside the frame, so
 * its content carries the scope itself: a full-size column painted with the
 * (now dark) sidebar tokens. Off, it renders its children with no element.
 */
export function DarkSidebarScope({ enabled, children }: { enabled: boolean; children: React.ReactNode }) {
  if (!enabled) return <>{children}</>;
  return (
    <div
      {...darkSidebarFrameProps(true)}
      className={`${DARK_SIDEBAR_SCOPE_CLASS} flex h-full min-h-0 w-full flex-col bg-sidebar text-sidebar-foreground`}
    >
      {children}
    </div>
  );
}
