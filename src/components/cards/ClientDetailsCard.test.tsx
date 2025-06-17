import { expect, describe, it, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { ClientDetailsCard, ClientDetailsValues } from './ClientDetailsCard';
import { userEvent } from '@vitest/browser/context';
import dayjs from 'dayjs';
import { waitFor } from '@testing-library/react';

describe('ClientDetailsCard', () => {
    const defaultValues: ClientDetailsValues = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        dateOfBirth: dayjs('1990-01-01')
    };

    it('renders all fields with initial values', () => {
        const { getByPlaceholder } = render(<ClientDetailsCard {...defaultValues} />);
        expect(getByPlaceholder('First name...')).toHaveValue('John');
        expect(getByPlaceholder('Last name...')).toHaveValue('Doe');
        expect(getByPlaceholder('Email...')).toHaveValue('john.doe@example.com');
    });

    it('calls onEdit with correct values on form submit', async () => {
        const onEdit = vi.fn();
        const { getByPlaceholder, getByRole } = render(
            <ClientDetailsCard {...defaultValues} onEdit={onEdit} />
        );
        const user = userEvent.setup();

        await user.clear(getByPlaceholder('First name...'));
        await user.type(getByPlaceholder('First name...'), 'Alice');

        await user.clear(getByPlaceholder('Last name...'));
        await user.type(getByPlaceholder('Last name...'), 'Smith');

        await user.clear(getByPlaceholder('Email...'));
        await user.type(getByPlaceholder('Email...'), 'alice.smith@example.com');

        await user.click(getByRole('button', { name: /edit information/i }));

        await waitFor(() => {
            expect(onEdit).toHaveBeenCalledTimes(1);
            expect(onEdit).toHaveBeenCalledWith(
                expect.objectContaining({
                    firstName: 'Alice',
                    lastName: 'Smith',
                    email: 'alice.smith@example.com'
                })
            );
        });
    });

    it('does not call onEdit if required fields are empty', async () => {
        const onEdit = vi.fn();
        const { getByPlaceholder, getByRole } = render(
            <ClientDetailsCard {...defaultValues} onEdit={onEdit} />
        );

        const user = userEvent.setup();
        await user.clear(getByPlaceholder('First name...'));
        await user.clear(getByPlaceholder('Last name...'));
        await user.clear(getByPlaceholder('Email...'));
        await user.click(getByRole('button', { name: /edit information/i }));

        expect(onEdit).not.toHaveBeenCalled();
    });
});
