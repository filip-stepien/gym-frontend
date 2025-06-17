import { MemoryRouter } from 'react-router'; // potrzebne dla <Link>
import { render } from 'vitest-browser-react';
import { describe, it, expect } from 'vitest';
import { EmployeesTableCard } from './EmployeesTableCard';

describe('EmployeesTableCard', () => {
    const mockEmployees = [
        {
            firstName: 'Anna',
            lastName: 'Nowak',
            position: 'Coach',
            detailsHref: '/employees/1'
        },
        {
            firstName: 'Jan',
            lastName: 'Kowalski',
            position: 'Manager',
            detailsHref: '/employees/2'
        }
    ];

    it('renders employees', () => {
        const { getByText } = render(
            <MemoryRouter>
                <EmployeesTableCard employees={mockEmployees} />
            </MemoryRouter>
        );

        expect(getByText('Anna')).toBeInTheDocument();
        expect(getByText('Nowak')).toBeInTheDocument();
        expect(getByText('Coach')).toBeInTheDocument();

        expect(getByText('Jan')).toBeInTheDocument();
        expect(getByText('Kowalski')).toBeInTheDocument();
        expect(getByText('Manager')).toBeInTheDocument();
    });

    it('renders "+ New" button if newEmployeeHref is provided', () => {
        const { getByRole } = render(
            <MemoryRouter>
                <EmployeesTableCard employees={mockEmployees} newEmployeeHref='/employees/new' />
            </MemoryRouter>
        );

        const newButton = getByRole('link', { name: /\+ New/i });
        expect(newButton).toBeInTheDocument();
        expect(newButton).toHaveAttribute('href', '/employees/new');
    });

    it('does not render "+ New" button if newEmployeeHref is not provided', () => {
        const { getByText } = render(
            <MemoryRouter>
                <EmployeesTableCard employees={mockEmployees} />
            </MemoryRouter>
        );

        expect(getByText('+ New').elements().length).toEqual(0);
    });

    it('renders details links correctly', () => {
        const { getByText } = render(
            <MemoryRouter>
                <EmployeesTableCard employees={mockEmployees} />
            </MemoryRouter>
        );

        expect(getByText('Details').elements().length).greaterThan(0);
        expect(getByText('Details').first()).toHaveAttribute('href', '/employees/1');
    });
});
