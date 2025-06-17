import { render } from 'vitest-browser-react';
import { describe, it, expect, vi } from 'vitest';
import { NewSessionCard } from './NewSessionCard';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';

describe('NewSessionCard', () => {
    const mockExerciseOptions = ['Push-up', 'Squat', 'Deadlift'];
    const mockTrainingHalls = ['Hall A', 'Hall B'];
    const user = userEvent.setup();

    it('renders all inputs and buttons', async () => {
        const { getByPlaceholder, getByText, container } = render(
            <MemoryRouter>
                <NewSessionCard
                    exerciseSearchOptions={mockExerciseOptions}
                    trainingHallNumbers={mockTrainingHalls}
                />
            </MemoryRouter>
        );

        expect(getByPlaceholder('Session title...')).toBeInTheDocument();
        expect(getByPlaceholder('Session description...')).toBeInTheDocument();
        expect(getByPlaceholder('Select date...')).toBeInTheDocument();
        expect(getByPlaceholder('Select time...')).toBeInTheDocument();
        expect(getByText('Select hall...')).toBeInTheDocument();
        expect(getByText('Create')).toBeInTheDocument();

        await user.click(container.querySelector('.ant-select-selector') as HTMLDivElement);

        expect(getByText('Hall A').first()).toBeInTheDocument();
        expect(getByText('Hall B').first()).toBeInTheDocument();
    });

    it('calls onCreate callback when form is valid and exercises are valid', async () => {
        const onCreate = vi.fn();

        const { getByPlaceholder, getByText, container } = render(
            <MemoryRouter>
                <NewSessionCard
                    exerciseSearchOptions={mockExerciseOptions}
                    trainingHallNumbers={mockTrainingHalls}
                    onCreate={onCreate}
                />
            </MemoryRouter>
        );

        expect(getByPlaceholder('Session title...')).toBeInTheDocument();

        await user.type(getByPlaceholder('Session title...').element(), 'Workout');
        await user.type(getByPlaceholder('Session description...').element(), 'Description');
        await user.type(getByPlaceholder('Select time...').element(), '12:00');

        await user.click(container.querySelector('.ant-select-selector') as HTMLDivElement);
        await user.click(getByText('Hall A').elements().at(1) as Element);
        await user.click(getByPlaceholder('Select date...').element());
        await user.click(getByText('Today').element());

        await user.click(getByText('Add row').element());

        await user.type(container.querySelector('.ant-input-number-input') as Element, '1');
        await user.type(
            Array.from(container.querySelectorAll('.ant-input-number-input')).at(1) as Element,
            '2'
        );

        await user.hover(getByText('Select exercise').element());

        await waitFor(async () => {
            expect(getByText('Squat').elements().length).toBeGreaterThan(0);
            await user.click(getByText('Squat').element());
        });

        await user.click(getByText('Create').element());

        expect(onCreate).toHaveBeenCalled();
    });
});
