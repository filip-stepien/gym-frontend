import { render } from 'vitest-browser-react';
import { describe, it, expect } from 'vitest';
import { ExerciseProgressCard } from './ExerciseProgressCard';
import { MemoryRouter } from 'react-router';
import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const mockChartData = {
    description: 'Weekly exercise activity',
    data: [
        {
            title: 'Squats',
            timeSeries: {
                labels: ['Mon', 'Tue', 'Wed'],
                values: [10, 15, 20]
            }
        },
        {
            title: 'Pushups',
            timeSeries: {
                labels: ['Mon', 'Tue', 'Wed'],
                values: [5, 8, 12]
            }
        }
    ]
};

describe('ExerciseProgressCard', () => {
    it('renders card description', () => {
        const { getByText } = render(
            <MemoryRouter>
                <ExerciseProgressCard chartData={mockChartData} />
            </MemoryRouter>
        );

        expect(getByText('Weekly exercise activity')).toBeInTheDocument();
    });

    it('renders chart and dropdown', async () => {
        const { getByText, container } = render(
            <MemoryRouter>
                <ExerciseProgressCard chartData={mockChartData} />
            </MemoryRouter>
        );

        await waitFor(() => {
            expect(getByText('Squats')).toBeInTheDocument();
            expect(container.getElementsByTagName('canvas')).toBeDefined();
        });
    });

    it('change selected exercise', async () => {
        const { getByText } = render(
            <MemoryRouter>
                <ExerciseProgressCard chartData={mockChartData} />
            </MemoryRouter>
        );

        const user = userEvent.setup();

        await waitFor(async () => {
            const input = getByText('Squats');
            await user.click(input.element());
        });

        await waitFor(async () => {
            const option = getByText('Pushups');
            await user.click(option.element());
        });

        await waitFor(() => {
            expect(getByText('Pushups').first()).toBeInTheDocument();
        });
    });

    it('renders <Empty /> when no chartData provided', () => {
        const { container } = render(
            <MemoryRouter>
                <ExerciseProgressCard chartData={undefined} />
            </MemoryRouter>
        );

        expect(container.querySelector('.ant-empty-image')).toBeDefined();
    });
});
