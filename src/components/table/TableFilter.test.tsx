import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TableFilter from './TableFilter';

const mockOnClose = vi.fn();
const mockOnFilter = vi.fn();

const organizations = ['Lendsqr', 'Irorun'];

describe('TableFilter Component', () => {
  it('updates input fields when user types', () => {
    render(
      <TableFilter
        onClose={mockOnClose}
        onFilter={mockOnFilter}
        organizations={organizations}
      />,
    );

    const usernameInput = screen.getByPlaceholderText(/user/i);
    fireEvent.change(usernameInput, { target: { value: 'john' } });

    expect(usernameInput).toHaveValue('john');
  });

  it('calls onFilter with form data when Filter is clicked', () => {
    render(
      <TableFilter
        onClose={mockOnClose}
        onFilter={mockOnFilter}
        organizations={organizations}
      />,
    );

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: 'john' },
    });

    fireEvent.change(screen.getByLabelText(/status/i), {
      target: { value: 'active' },
    });

    fireEvent.click(screen.getByRole('button', { name: /filter/i }));

    expect(mockOnFilter).toHaveBeenCalledWith(
      expect.objectContaining({
        username: 'john',
        status: 'active',
      }),
    );
  });

  it('resets form when Reset is clicked', () => {
    render(
      <TableFilter
        onClose={mockOnClose}
        onFilter={mockOnFilter}
        organizations={organizations}
      />,
    );

    const usernameInput = screen.getByPlaceholderText(/user/i);

    fireEvent.change(usernameInput, { target: { value: 'john' } });
    expect(usernameInput).toHaveValue('john');

    fireEvent.click(screen.getByRole('button', { name: /reset/i }));

    expect(usernameInput).toHaveValue('');
  });
});
