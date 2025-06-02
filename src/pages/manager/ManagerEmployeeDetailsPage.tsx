import { BackButton } from '@/components/layout/BackButton';
import { EmployeeDetailsCard } from '@/components/cards/EmployeeDetailsCard';

const employeeDetailsCardData = {
    firstName: 'John',
    lastName: 'Pork',
    dateOfBirth: '21.02.2002',
    email: 'email@email.com',
    position: 'Manager',
    phone: '+1234567890'
};

export function ManagerEmployeeDetailsPage() {
    return (
        <div>
            <BackButton />
            <EmployeeDetailsCard {...employeeDetailsCardData} />
        </div>
    );
}
