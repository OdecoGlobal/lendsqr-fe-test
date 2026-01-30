/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import Table from './Table';
import { fetchUsers } from '../../lib/api';

vi.mock('../../lib/api');

vi.mock('../loading/Loading', () => ({
  default: () => <div data-testid="loading-spinner" />,
}));

vi.mock('./TableFilter', () => ({
  default: ({ onFilter }: any) => (
    <button
      onClick={() =>
        onFilter({
          organization: '',
          username: 'user1',
          email: '',
          date: '',
          phoneNumber: '',
          status: '',
        })
      }
    >
      Apply Filter
    </button>
  ),
}));

vi.mock('../pagination/Pagination', () => ({
  default: () => <div data-testid="pagination" />,
}));

vi.mock('../empty/Empty', () => ({
  default: ({ actionLabel }: any) => <div>{actionLabel}</div>,
}));

const mockUsers = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  organization: 'Lendsqr',
  user_name: `user${i}`,
  email: `user${i}@mail.com`,
  phone_number: '1234567890',
  date_joined: new Date().toISOString(),
  status: 'active',
}));

describe('Table Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('shows loading state initially', async () => {
    (fetchUsers as any).mockImplementation(
      () => new Promise(resolve => setTimeout(() => resolve([]), 50)),
    );

    render(<Table />);

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument(),
    );
  });

  it('renders users after fetch', async () => {
    (fetchUsers as any).mockResolvedValue(mockUsers);

    render(<Table />);

    expect(await screen.findByText('user0@mail.com')).toBeInTheDocument();
  });

  it('paginates users (10 per page)', async () => {
    (fetchUsers as any).mockResolvedValue(mockUsers);

    render(<Table />);

    await screen.findByText('user0@mail.com');

    expect(screen.getAllByRole('row')).toHaveLength(11);
  });

  it('shows empty state when no users', async () => {
    (fetchUsers as any).mockResolvedValue([]);

    render(<Table />);

    expect(await screen.findByText(/clear filters/i)).toBeInTheDocument();
  });

  it('filters users when filter is applied', async () => {
    (fetchUsers as any).mockResolvedValue(mockUsers);

    render(<Table />);

    await screen.findByText('user0@mail.com');

    fireEvent.click(screen.getAllByAltText('Filter icon')[0]);

    fireEvent.click(screen.getByText('Apply Filter'));

    await waitFor(() => {
      expect(screen.getByText('user1@mail.com')).toBeInTheDocument();
    });

    expect(screen.queryByText('user0@mail.com')).not.toBeInTheDocument();
  });
});
