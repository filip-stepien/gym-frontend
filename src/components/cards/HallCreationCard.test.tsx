import { describe, it, expect, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { HallCreationCard, HallValues } from './HallCreationCard';
import { HallTypeDto } from '@/generated/gym-api';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';

describe('HallCreationCard', () => {
    const hallTypes: HallTypeDto[] = [
        { uuid: '1', name: 'Fitness' },
        { uuid: '2', name: 'Yoga' }
    ];

    it('renders form fields and hall types', async () => {
        const { getByLabelText, getByText } = render(
            <MemoryRouter>
                <HallCreationCard hallTypes={hallTypes} />
            </MemoryRouter>
        );

        const user = userEvent.setup();

        expect(getByLabelText('Hall Number')).toBeInTheDocument();
        expect(getByLabelText('Type')).toBeInTheDocument();
        expect(getByLabelText('Description')).toBeInTheDocument();

        await user.click(getByLabelText('Type').element());

        expect(getByText('Fitness')).toBeInTheDocument();
        expect(getByText('Yoga')).toBeInTheDocument();
    });

    it('submits form with correct values', async () => {
        const handleCreate = vi.fn();
        const user = userEvent.setup();

        const { getByLabelText, getByText } = render(
            <MemoryRouter>
                <HallCreationCard hallTypes={hallTypes} onCreate={handleCreate} />
            </MemoryRouter>
        );

        await user.type(getByLabelText('Hall Number').element(), 'A101');
        await user.click(getByLabelText('Type').element());
        await user.click(getByText('Fitness').element());
        await user.type(getByLabelText('Description').element(), 'Spacious and well ventilated');

        await user.click(getByText('Create', { exact: true }).element());

        await waitFor(() =>
            expect(handleCreate).toHaveBeenCalledWith({
                hallNumber: 'A101',
                hallType: '1',
                hallDescription: 'Spacious and well ventilated'
            } satisfies HallValues)
        );
    });

    it('does not call onCreate if required fields are missing', async () => {
        const handleCreate = vi.fn();
        const user = userEvent.setup();

        const { getByText } = render(
            <MemoryRouter>
                <HallCreationCard hallTypes={hallTypes} onCreate={handleCreate} />
            </MemoryRouter>
        );

        await user.click(getByText('Create', { exact: true }).element());

        await waitFor(() => {
            expect(handleCreate).not.toHaveBeenCalled();
        });
    });
});
