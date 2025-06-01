import {
    MembershipCreationCard,
    MembershipValues
} from '@/components/cards/MembershipCreationCard';
import { CurrentMaintenanceTasksCard } from '@/components/cards/CurrentMaintenanceTasksCard';
import { Page } from '@/components/layout/Page';
import dayjs from 'dayjs';

const currentMaintenanceTasksCardData = {
    halls: [
        {
            hallNumber: 1,
            description: 'Annual maintenance.',
            detailsHref: '/employee/maintenance-task/1',
            duration: {
                startTime: dayjs(),
                endTime: dayjs().add(1, 'hour')
            }
        },
        {
            hallNumber: '2',
            description: 'Fortnight maintenance.',
            detailsHref: '/employee/maintenance-task/1',
            duration: {
                startTime: dayjs(),
                endTime: dayjs().add(1, 'hour')
            }
        }
    ]
};

const membershipCreationCardData = {
    onCreate: (data: MembershipValues) => {
        // POST...
        console.log(data);
    }
};

export function EmployeeDashboardPage() {
    return (
        <Page>
            <MembershipCreationCard {...membershipCreationCardData} />
            <CurrentMaintenanceTasksCard {...currentMaintenanceTasksCardData} />
        </Page>
    );
}
