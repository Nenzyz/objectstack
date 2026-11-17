// Copyright (c) 2026 ObjectStack. Licensed under the Apache-2.0 license.

/**
 * The phone drawer renders the sidebar into a portal, outside the sidebar
 * frame that carries the appearance on desktop, so its content carries the
 * scope itself: a full-size column with the same class and attributes, painted
 * with the (then dark) sidebar tokens when dark is on. Today's appearance
 * renders the children with no element at all.
 */

import * as React from 'react';
import { cn } from '@object-ui/components';
import {
  DARK_SIDEBAR_SCOPE_CLASS,
  isDefaultSidebarAppearance,
  sidebarAppearanceAttrs,
  type SidebarAppearance,
} from './sidebarAppearance.js';

export function SidebarAppearanceScope({
  appearance,
  enabled,
  children,
}: {
  appearance: SidebarAppearance;
  /** False renders the children bare — the desktop sidebar carries the scope on its frame. */
  enabled: boolean;
  children: React.ReactNode;
}) {
  if (!enabled || isDefaultSidebarAppearance(appearance)) return <>{children}</>;
  return (
    <div
      {...sidebarAppearanceAttrs(appearance)}
      className={cn(
        'flex h-full min-h-0 w-full flex-col',
        appearance.dark && [DARK_SIDEBAR_SCOPE_CLASS, 'bg-sidebar text-sidebar-foreground'],
      )}
    >
      {children}
    </div>
  );
}
