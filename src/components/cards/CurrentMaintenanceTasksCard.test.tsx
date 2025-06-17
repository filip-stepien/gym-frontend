import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import {
    CurrentMaintenanceTasksCard,
    CurrentMaintenanceTaskHall
} from './CurrentMaintenanceTasksCard';
import dayjs from 'dayjs';
import { MemoryRouter } from 'react-router';

describe('CurrentMaintenanceTasksCard', () => {
    const sampleData: CurrentMaintenanceTaskHall[] = [
        {
            hallNumber: 'A1',
            description: 'Fix lighting',
            detailsHref: '/employee/training-halls/a1',
            duration: {
                startTime: dayjs('2023-01-01T08:00:00'),
                endTime: dayjs('2023-01-01T12:00:00')
            }
        }
    ];

    it('renders table row with hall info', () => {
        const { getByText } = render(
            <MemoryRouter>
                <CurrentMaintenanceTasksCard halls={sampleData} />
            </MemoryRouter>
        );

        expect(getByText('A1')).toBeInTheDocument();
        expect(getByText('Fix lighting')).toBeInTheDocument();
        expect(getByText('08:00 - 12:00')).toBeInTheDocument();
        expect(getByText('Details')).toBeInTheDocument();
    });
});
