import { MemoryRouter } from 'react-router'; // potrzebne dla <Link>
import { render } from 'vitest-browser-react';
import { describe, it, expect, vi } from 'vitest';
import { HallsTableCard, HallsTableHall } from './HallsTableCard';
import { waitFor } from '@testing-library/react';

describe('HallsTableCard', () => {
    const mockHalls: HallsTableHall[] = [
        {
            hallName: '2a',
            hallType: 'Yoga',
            hallStatus: 'Available',
            detailsHref: '/halls/1'
        },
        {
            hallName: '3a',
            hallType: 'Crossfit',
            hallStatus: 'Busy',
            detailsHref: '/halls/2'
        }
    ];

    const mockDataFetcher = vi.fn().mockResolvedValue({
        data: mockHalls,
        total: mockHalls.length
    });

    it('renders halls after dataFetcher resolves', async () => {
        const { getByText } = render(
            <MemoryRouter>
                <HallsTableCard dataFetcher={mockDataFetcher} defaultPageSize={10} />
            </MemoryRouter>
        );

        await waitFor(() => {
            expect(getByText('2a')).toBeInTheDocument();
            expect(getByText('Yoga')).toBeInTheDocument();
            expect(getByText('Available')).toBeInTheDocument();

            expect(getByText('3a')).toBeInTheDocument();
            expect(getByText('Crossfit')).toBeInTheDocument();
            expect(getByText('Busy')).toBeInTheDocument();
        });
    });

    it('renders "+ New" button if newHallHref is provided', () => {
        const { getByRole } = render(
            <MemoryRouter>
                <HallsTableCard dataFetcher={mockDataFetcher} newHallHref='/halls/new' />
            </MemoryRouter>
        );

        const newButton = getByRole('link', { name: /\+ New/i });
        expect(newButton).toBeInTheDocument();
        expect(newButton).toHaveAttribute('href', '/halls/new');
    });

    it('does not render "+ New" button if newHallHref is not provided', () => {
        const { getByText } = render(
            <MemoryRouter>
                <HallsTableCard dataFetcher={mockDataFetcher} />
            </MemoryRouter>
        );

        expect(getByText('+ New').elements().length).toEqual(0);
    });

    it('renders details links correctly', async () => {
        const { getByText } = render(
            <MemoryRouter>
                <HallsTableCard dataFetcher={mockDataFetcher} />
            </MemoryRouter>
        );

        await waitFor(() => {
            expect(getByText('Details').elements().length).greaterThan(0);
            expect(getByText('Details').first()).toHaveAttribute('href', '/halls/1');
        });
    });
});
