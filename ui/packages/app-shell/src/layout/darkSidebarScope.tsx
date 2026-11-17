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

/** The attribute that marks a subtree rendered with the dark sidebar appearance. */
export const SIDEBAR_APPEARANCE_ATTR = 'data-sidebar-appearance';

/** The classes that put a subtree on the dark token set. */
export const DARK_SIDEBAR_SCOPE_CLASS = 'dark';

/**
 * Props for the sidebar frame: the dark scope when on, nothing at all when off,
 * so the frame's markup is unchanged with the option off.
 */
export function darkSidebarFrameProps(enabled: boolean): { [SIDEBAR_APPEARANCE_ATTR]?: 'dark' } {
  return enabled ? { [SIDEBAR_APPEARANCE_ATTR]: 'dark' } : {};
}

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
