import { CurrentMaintenanceTasksCard } from '@/components/cards/CurrentMaintenanceTasksCard';
import { EmployeeCreationCard, EmployeeValues } from '@/components/cards/EmployeeCreationCard';
import { Page } from '@/components/layout/Page';
import dayjs from 'dayjs';

const currentMaintenanceTasksCardData = {
    halls: [
        {
            hallNumber: 1,
            description: 'Annual maintenance.',
            detailsHref: '/manager/maintenance-task/1',
            duration: {
                startTime: dayjs(),
                endTime: dayjs().add(1, 'hour')
            }
        },
        {
            hallNumber: '2',
            description: 'Fortnight maintenance.',
            detailsHref: '/manager/maintenance-task/1',
            duration: {
                startTime: dayjs(),
                endTime: dayjs().add(1, 'hour')
            }
        }
    ]
};

const employeeCreationCardData = {
    onCreate: (values: EmployeeValues) => {
        // POST...
        console.log(values);
    }
};

export function ManagerDashboardPage() {
    return (
        <Page>
            <EmployeeCreationCard {...employeeCreationCardData} />
            <CurrentMaintenanceTasksCard {...currentMaintenanceTasksCardData} />
        </Page>
    );
}
