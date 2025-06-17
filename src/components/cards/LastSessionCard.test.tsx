import { MemoryRouter } from 'react-router';
import { render } from 'vitest-browser-react';
import { describe, it, expect } from 'vitest';
import { LastSessionCard } from './LastSessionCard';

describe('LastSessionCard', () => {
    const mockActions = [<button key='1'>Action1</button>, <button key='2'>Action2</button>];

    it('renders date, tags, coach, stats, exercises and actions', () => {
        const { getByText } = render(
            <MemoryRouter>
                <LastSessionCard
                    date='2025-06-17'
                    tags={['Strength', 'Cardio']}
                    coach='John Doe'
                    totalSets={69}
                    totalVolume={120}
                    exercises={['Squats', 'Deadlift']}
                    actions={mockActions}
                    detailsHref='/session/123'
                />
            </MemoryRouter>
        );

        expect(getByText('2025-06-17')).toBeInTheDocument();

        expect(getByText('Strength')).toBeInTheDocument();
        expect(getByText('Cardio')).toBeInTheDocument();

        expect(getByText('Coach')).toBeInTheDocument();
        expect(getByText('John Doe')).toBeInTheDocument();

        expect(getByText('Total sets')).toBeInTheDocument();
        expect(getByText('69')).toBeInTheDocument();

        expect(getByText('Volume')).toBeInTheDocument();
        expect(getByText('120 kg')).toBeInTheDocument();

        expect(getByText('Squats')).toBeInTheDocument();
        expect(getByText('Deadlift')).toBeInTheDocument();

        expect(getByText('Action1')).toBeInTheDocument();
        expect(getByText('Action2')).toBeInTheDocument();
    });

    it('renders placeholders when data is missing', () => {
        const { getByText } = render(
            <MemoryRouter>
                <LastSessionCard />
            </MemoryRouter>
        );

        expect(getByText('-').elements().length).toEqual(2);
    });

    it('renders loading state when isLoading is true', () => {
        const { container } = render(
            <MemoryRouter>
                <LastSessionCard isLoading />
            </MemoryRouter>
        );

        expect(container.querySelector('.ant-skeleton')).toBeTruthy();
    });

    it('renders empty state when isEmpty is true', () => {
        const { container } = render(
            <MemoryRouter>
                <LastSessionCard isEmpty />
            </MemoryRouter>
        );

        expect(container.querySelector('.ant-empty-image')).toBeTruthy();
    });
});
