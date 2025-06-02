import { BackButton } from '@/components/layout/BackButton';
import { EmployeeCreationCard, EmployeeValues } from '@/components/cards/EmployeeCreationCard';

const employeeCreationCardData = {
    onCreate: (values: EmployeeValues) => {
        // POST...
        console.log(values);
    }
};

export function ManagerEmployeeCreationPage() {
    return (
        <div>
            <BackButton />
            <EmployeeCreationCard {...employeeCreationCardData} />
        </div>
    );
}
