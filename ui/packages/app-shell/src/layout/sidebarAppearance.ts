// Copyright (c) 2026 ObjectStack. Licensed under the Apache-2.0 license.

/**
 * The operator's sidebar appearance: a dark navigation sidebar beside a light
 * page body, and a size preset for the sidebar's text, icons and rows. Both
 * come from the runtime config and are off (today's look) unless served.
 *
 * Neither chooses a colour or a size here. Dark is the existing `dark` class,
 * so the `.dark` token set and every `dark:` variant apply inside it; the size
 * preset is an attribute that `styles.css` turns into the Tailwind spacing and
 * text tokens inside the sidebar. With both off the frame gets no class and no
 * attribute, so its markup is unchanged.
 */

import type { SidebarScale } from '../runtime-config.js';

/** Marks a subtree rendered with the dark sidebar appearance. */
export const SIDEBAR_APPEARANCE_ATTR = 'data-sidebar-appearance';

/** Carries a non-default sidebar size preset; `styles.css` keys the tokens on it. */
export const SIDEBAR_SCALE_ATTR = 'data-sidebar-scale';

/** The class that puts a subtree on the dark token set. */
export const DARK_SIDEBAR_SCOPE_CLASS = 'dark';

export interface SidebarAppearance {
  dark: boolean;
  scale: SidebarScale;
}

/** Whether the appearance is today's sidebar, which renders no scope at all. */
export function isDefaultSidebarAppearance(appearance: SidebarAppearance): boolean {
  return !appearance.dark && appearance.scale === 'default';
}

/**
 * The attributes of a sidebar appearance scope: one per non-default facet,
 * none at all for today's sidebar.
 */
export function sidebarAppearanceAttrs(
  appearance: SidebarAppearance,
): { [SIDEBAR_APPEARANCE_ATTR]?: 'dark'; [SIDEBAR_SCALE_ATTR]?: Exclude<SidebarScale, 'default'> } {
  return {
    ...(appearance.dark ? { [SIDEBAR_APPEARANCE_ATTR]: 'dark' as const } : {}),
    ...(appearance.scale !== 'default' ? { [SIDEBAR_SCALE_ATTR]: appearance.scale } : {}),
  };
}
