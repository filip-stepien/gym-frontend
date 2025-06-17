import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { EmployeeDetailsCard } from './EmployeeDetailsCard';

describe('EmployeeDetailsCard', () => {
    const mockData = {
        firstName: 'Alice',
        lastName: 'Smith',
        dateOfBirth: '1990-05-15',
        email: 'alice@example.com',
        position: 'Manager',
        phone: '123-456-789'
    };

    it('renders all employee details correctly', () => {
        render(<EmployeeDetailsCard {...mockData} />);

        expect(screen.getByText('Alice')).toBeInTheDocument();
        expect(screen.getByText('Smith')).toBeInTheDocument();
        expect(screen.getByText('1990-05-15')).toBeInTheDocument();
        expect(screen.getByText('alice@example.com')).toBeInTheDocument();
        expect(screen.getByText('Manager')).toBeInTheDocument();
        expect(screen.getByText('123-456-789')).toBeInTheDocument();

        expect(screen.getByText('First Name')).toBeInTheDocument();
        expect(screen.getByText('Last Name')).toBeInTheDocument();
        expect(screen.getByText('Date Of Birth')).toBeInTheDocument();
        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('Position')).toBeInTheDocument();
        expect(screen.getByText('Phone number')).toBeInTheDocument();
    });
});
