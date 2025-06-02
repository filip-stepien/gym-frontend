import { EmployeesTableCard } from '@/components/cards/EmployeesTableCard';

const employeesTableCardData = {
    newEmployeeHref: '/manager/create-employee',
    employees: [
        {
            firstName: 'John',
            lastName: 'Pork',
            position: 'Coach',
            detailsHref: '/manager/employees/1'
        },
        {
            firstName: 'Bob',
            lastName: 'Beef',
            position: 'Employee',
            detailsHref: '/manager/employees/1'
        },
        {
            firstName: 'Tim',
            lastName: 'Cheese',
            position: 'Employee',
            detailsHref: '/manager/employees/1'
        }
    ]
};

export function ManagerEmployeesPage() {
    return <EmployeesTableCard {...employeesTableCardData} />;
}
