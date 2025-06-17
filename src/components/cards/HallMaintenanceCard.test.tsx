import { describe, it, expect, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { HallMaintenanceCard } from './HallMaintenanceCard';
import { MemoryRouter } from 'react-router';
import dayjs from 'dayjs';
import userEvent from '@testing-library/user-event';

describe('HallMaintenanceCard', () => {
    const props = {
        employeeFirstName: 'Anna',
        employeeLastName: 'Kowalska',
        startTime: dayjs('2025-06-17T10:00:00'),
        endTime: dayjs('2025-06-17T12:30:00'),
        description: 'Air conditioning service'
    };

    it('renders all maintenance information', () => {
        const { getByText } = render(
            <MemoryRouter>
                <HallMaintenanceCard {...props} />
            </MemoryRouter>
        );

        expect(getByText('Anna Kowalska')).toBeInTheDocument();
        expect(getByText('06.17.2025 10:00')).toBeInTheDocument();
        expect(getByText('06.17.2025 12:30')).toBeInTheDocument();
        expect(getByText('Air conditioning service')).toBeInTheDocument();
    });

    it('calls onCancel when the Cancel button is clicked', async () => {
        const onCancel = vi.fn();
        const user = userEvent.setup();

        const { getByRole } = render(
            <MemoryRouter>
                <HallMaintenanceCard {...props} onCancel={onCancel} />
            </MemoryRouter>
        );

        await user.click(getByRole('button', { name: /cancel/i }).element());
        expect(onCancel).toHaveBeenCalledTimes(1);
    });
});
