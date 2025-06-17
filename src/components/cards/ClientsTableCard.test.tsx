import { describe, it, expect, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { ClientsTableCard, ClientsTableClient } from './ClientsTableCard';
import { MemoryRouter } from 'react-router';
import { waitFor } from '@testing-library/react';

describe('ClientsTableCard', () => {
    const mockData: ClientsTableClient[] = [
        {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@example.com',
            membershipStatus: true,
            detailsHref: '/clients/1'
        },
        {
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane@example.com',
            membershipStatus: false,
            detailsHref: '/clients/2'
        }
    ];

    const dataFetcher = vi.fn().mockResolvedValue({
        data: mockData,
        total: 2
    });

    it('renders table and calls dataFetcher on mount', async () => {
        const { getByText } = render(
            <MemoryRouter>
                <ClientsTableCard dataFetcher={dataFetcher} defaultPageSize={10} />
            </MemoryRouter>
        );

        expect(dataFetcher).toHaveBeenCalledWith(1, 10, undefined, undefined);

        await waitFor(() => {
            expect(getByText('John').first()).toBeInTheDocument();
            expect(getByText('Doe')).toBeInTheDocument();
            expect(getByText('Jane').first()).toBeInTheDocument();
            expect(getByText('Smith')).toBeInTheDocument();
        });
    });

    it('does not render "+ New" button if newClientHref is missing', () => {
        const { getByText } = render(
            <MemoryRouter>
                <ClientsTableCard dataFetcher={dataFetcher} defaultPageSize={10} />
            </MemoryRouter>
        );

        expect(getByText('+ New').elements().length).toEqual(0);
    });

    it('renders "+ New" button if newClientHref is provided', () => {
        const { getByRole } = render(
            <MemoryRouter>
                <ClientsTableCard
                    dataFetcher={dataFetcher}
                    defaultPageSize={10}
                    newClientHref='/clients/new'
                />
            </MemoryRouter>
        );

        const newButton = getByRole('link', { name: /\+ New/i });
        expect(newButton).toBeInTheDocument();
        expect(newButton).toHaveAttribute('href', '/clients/new');
    });

    it('renders pagination', async () => {
        const { container } = render(
            <MemoryRouter>
                <ClientsTableCard dataFetcher={dataFetcher} defaultPageSize={10} />
            </MemoryRouter>
        );

        await waitFor(() => {
            expect(container.querySelector('.ant-pagination')).toBeInTheDocument();
        });
    });

    it('renders details links correctly', async () => {
        const { getByText } = render(
            <MemoryRouter>
                <ClientsTableCard dataFetcher={dataFetcher} defaultPageSize={10} />
            </MemoryRouter>
        );

        await waitFor(() => {
            expect(getByText('Details').elements()).toHaveLength(2);
            expect(getByText('Details').first()).toHaveAttribute('href', '/clients/1');
        });
    });
});
