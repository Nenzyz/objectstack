/**
 * ObjectUI
 * Copyright (c) 2024-present ObjectStack Inc.
 *
 * The active Unread/All filter pill paints `bg-accent`, whose paired text
 * colour is `text-accent-foreground`: a brand `accentColor` recomputes
 * `--accent-foreground` for contrast, while `text-foreground` does not follow it.
 */
import '@testing-library/jest-dom/vitest';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

// Interpolating stub: the real packs carry `{{count}}` / `{{total}}`, so a
// stub that returned `defaultValue` verbatim would make every numeric
// assertion below vacuous (it would assert on the literal "{{total}}"). It does
// not plural-select — the singular forms are pinned against the real `en`
// pack in `InboxPopover.badgePlural-13133.test.tsx`.
vi.mock('@object-ui/i18n', async (importOriginal) => ({
  // `formatRelativeTime` is reached through `utils/relativeTime` for every
  // rendered row — keep the real module and override only the hook.
  ...(await importOriginal<Record<string, unknown>>()),
  useObjectTranslation: () => ({
    language: 'en',
    t: (key: string, options?: Record<string, unknown>) =>
      String(options?.defaultValue ?? key).replace(/\{\{(\w+)\}\}/g, (_m, name: string) =>
        String(options?.[name] ?? ''),
      ),
  }),
}));

vi.mock('react-router-dom', () => ({
  useNavigate: () => vi.fn(),
  useParams: () => ({ appName: 'setup' }),
}));

vi.mock('../../context/NavigationContext', () => ({
  useNavigationContext: () => ({ currentAppName: 'setup' }),
}));

// Passthrough primitives so the popover body renders without driving Radix
// open/close in jsdom (the pattern WorkspaceSwitcher.test.tsx uses).
vi.mock('@object-ui/components', async (importOriginal) => ({
  ...(await importOriginal<Record<string, unknown>>()),
  Button: ({ children, ...p }: any) => <button type="button" {...p}>{children}</button>,
  Popover: ({ children }: any) => <div>{children}</div>,
  PopoverTrigger: ({ children }: any) => <div>{children}</div>,
  PopoverContent: ({ children }: any) => <div>{children}</div>,
  Tabs: ({ children }: any) => <div>{children}</div>,
  TabsList: ({ children }: any) => <div>{children}</div>,
  TabsTrigger: ({ children }: any) => <button type="button">{children}</button>,
  TabsContent: ({ children }: any) => <div>{children}</div>,
}));

vi.mock('lucide-react', async (importOriginal) => ({
  ...(await importOriginal<Record<string, unknown>>()),
  Bell: () => <span />,
  CheckSquare: () => <span />,
  Activity: () => <span />,
  ChevronRight: () => <span />,
}));

import { InboxPopover, type InboxNotification } from '../InboxPopover';

const notif = (over: Partial<InboxNotification> & { id: string }): InboxNotification => ({
  type: 'project.digest',
  title: 'Scheduled project digest',
  is_read: false,
  created_at: '2026-08-10T10:00:00Z',
  ...over,
});

/** N distinct unread topics (each its own `(topic, title)` pair). */
const distinctUnread = (n: number): InboxNotification[] =>
  Array.from({ length: n }, (_, i) =>
    notif({ id: `t${i}`, type: `topic.${i}`, title: `Topic ${i}` }),
  );

function renderPopover(props: {
  notifications: InboxNotification[];
  pendingApprovalsCount: number;
  unreadCount?: number;
}) {
  return render(
    <InboxPopover
      notifications={props.notifications}
      unreadCount={props.unreadCount ?? props.notifications.filter((n) => !n.is_read).length}
      pendingApprovalsCount={props.pendingApprovalsCount}
      activity={{ value: [], status: 'ready', readable: true }}
      onMarkAllRead={vi.fn()}
      onMarkRead={vi.fn()}
    />,
  );
}

describe('InboxPopover — filter pill contrast', () => {
  it('the active filter pill pairs bg-accent with text-accent-foreground', () => {
    renderPopover({ notifications: distinctUnread(2), pendingApprovalsCount: 0 });
    const unread = screen.getByRole('button', { name: /Unread/ });
    const all = screen.getByRole('button', { name: 'All' });
    for (const cls of ['bg-accent', 'text-accent-foreground']) expect(unread).toHaveClass(cls);
    expect(unread).not.toHaveClass('text-foreground');
    expect(all).not.toHaveClass('bg-accent');
  });
});
