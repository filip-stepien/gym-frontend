import { MemoryRouter } from 'react-router';
import { render } from 'vitest-browser-react';
import { describe, it, expect } from 'vitest';
import dayjs from 'dayjs';
import { MembershipStatusCard } from './MembershipStatusCard';

describe('MembershipStatusCard', () => {
    const lastPayment = dayjs().subtract(10, 'day').format(); // 10 dni temu
    const validUntil = dayjs().add(5, 'day').format(); // za 5 dni

    it('renders correctly with valid dates', () => {
        const { getByText } = render(
            <MemoryRouter>
                <MembershipStatusCard
                    lastPayment={lastPayment}
                    validUntil={validUntil}
                    detailsHref='/membership/details'
                />
            </MemoryRouter>
        );

        expect(getByText(/Last Payment/i)).toBeInTheDocument();
        expect(getByText(dayjs(lastPayment).format('DD.MM.YYYY'))).toBeInTheDocument();

        expect(getByText(/Valid Until/i)).toBeInTheDocument();
        expect(getByText(dayjs(validUntil).format('DD.MM.YYYY'))).toBeInTheDocument();

        expect(getByText(/day(s)? left/i)).toBeInTheDocument();

        const detailsButton = getByText(/Show Details/i);
        expect(detailsButton).toBeInTheDocument();
        expect(detailsButton.element().closest('a')).toHaveAttribute('href', '/membership/details');
    });

    it('renders expired if dates are missing or expired', () => {
        const { getByText, rerender } = render(
            <MemoryRouter>
                <MembershipStatusCard />
            </MemoryRouter>
        );

        expect(getByText(/Expired/i)).toBeInTheDocument();

        rerender(
            <MemoryRouter>
                <MembershipStatusCard
                    lastPayment={dayjs().subtract(10, 'day').format()}
                    validUntil={dayjs().subtract(1, 'day').format()}
                />
            </MemoryRouter>
        );

        expect(getByText(/Expired/i)).toBeInTheDocument();
    });

    it('renders "-" when lastPayment or validUntil are missing', () => {
        const { getByText } = render(
            <MemoryRouter>
                <MembershipStatusCard />
            </MemoryRouter>
        );

        expect(getByText('-').elements().length).toEqual(2);
    });

    it('does not render "Show Details" button if detailsHref is not provided', () => {
        const { getByText } = render(
            <MemoryRouter>
                <MembershipStatusCard lastPayment={lastPayment} validUntil={validUntil} />
            </MemoryRouter>
        );

        expect(getByText(/Show Details/i).elements.length).toEqual(0);
    });
});
