import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';

// Portaled overlays render outside a modal Dialog's DOM subtree; react-remove-scroll
// only lets wheel/touch through for descendants or [data-radix-scroll-lock-ignore].
const ATTR = 'data-radix-scroll-lock-ignore';

describe('portaled overlay content opts out of modal scroll lock', () => {
  it('PopoverContent', () => {
    render(
      <Popover open>
        <PopoverTrigger>t</PopoverTrigger>
        <PopoverContent data-testid="c">x</PopoverContent>
      </Popover>,
    );
    expect(screen.getByTestId('c')).toHaveAttribute(ATTR);
  });

  it('SelectContent', () => {
    render(
      <Select open>
        <SelectTrigger>t</SelectTrigger>
        <SelectContent data-testid="c">
          <SelectItem value="a">a</SelectItem>
        </SelectContent>
      </Select>,
    );
    expect(screen.getByTestId('c')).toHaveAttribute(ATTR);
  });

  it('DropdownMenuContent', () => {
    render(
      <DropdownMenu open>
        <DropdownMenuTrigger>t</DropdownMenuTrigger>
        <DropdownMenuContent data-testid="c">
          <DropdownMenuItem>a</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );
    expect(screen.getByTestId('c')).toHaveAttribute(ATTR);
  });
});
