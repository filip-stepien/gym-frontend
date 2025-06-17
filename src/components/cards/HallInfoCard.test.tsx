import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import { HallInfoCard } from './HallInfoCard';
import { MemoryRouter } from 'react-router';

describe('HallInfoCard', () => {
    const baseProps = {
        hallNumber: 'A1',
        halltype: 'Yoga',
        hallDescription: 'Bright and calm hall with mirrors and mats.'
    };

    it('renders hall info with Available status and green badge', () => {
        const { getByText, container } = render(
            <MemoryRouter>
                <HallInfoCard {...baseProps} hallStatus='Available' />
            </MemoryRouter>
        );

        expect(getByText('Number')).toBeInTheDocument();
        expect(getByText('A1')).toBeInTheDocument();

        expect(getByText('Type')).toBeInTheDocument();
        expect(getByText('Yoga')).toBeInTheDocument();

        expect(getByText('Status')).toBeInTheDocument();
        expect(getByText('Available')).toBeInTheDocument();

        expect(getByText('Description')).toBeInTheDocument();
        expect(getByText('Bright and calm hall with mirrors and mats.')).toBeInTheDocument();

        expect(container.querySelector('.ant-badge-status-success')).toBeTruthy();
    });

    it('renders correct badge status for "Busy"', () => {
        const { container } = render(
            <MemoryRouter>
                <HallInfoCard {...baseProps} hallStatus='Busy' />
            </MemoryRouter>
        );
        expect(container.querySelector('.ant-badge-status-error')).toBeTruthy();
    });

    it('renders correct badge status for "Under Maintance"', () => {
        const { container } = render(
            <MemoryRouter>
                <HallInfoCard {...baseProps} hallStatus='Under Maintance' />
            </MemoryRouter>
        );
        expect(container.querySelector('.ant-badge-status-warning')).toBeTruthy();
    });

    it('renders default badge for unknown status', () => {
        const { container } = render(
            <MemoryRouter>
                <HallInfoCard {...baseProps} hallStatus='Random' />
            </MemoryRouter>
        );
        expect(container.querySelector('.ant-badge-status-default')).toBeTruthy();
    });

    it('renders "Begin Maintenance" button', () => {
        const { getByRole } = render(
            <MemoryRouter>
                <HallInfoCard {...baseProps} hallStatus='Available' />
            </MemoryRouter>
        );

        const button = getByRole('button', { name: /begin maintenance/i });
        expect(button).toBeInTheDocument();
    });
});
