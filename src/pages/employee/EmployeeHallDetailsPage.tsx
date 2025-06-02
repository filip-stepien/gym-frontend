import { Flex } from 'antd';
import { HallMaintenanceCard } from '@/components/cards/HallMaintenanceCard';
import { BackButton } from '@/components/layout/BackButton';
import { HallInfoCard } from '@/components/cards/HallInfoCard';
import dayjs from 'dayjs';

const hallInfoCardData = {
    hallNumber: 1,
    halltype: 'yoga',
    hallStatus: 'Busy',
    hallDescription: 'very long description'
};

const hallMaintenanceCardData = {
    employeeFirstName: 'John',
    employeeLastName: 'Pork',
    startTime: dayjs(),
    endTime: dayjs().add(3, 'hours'),
    description: 'very long description',
    onCancel: () => {
        // DELETE...
        console.log('canceled');
    }
};

export function EmployeeHallDetailsPage() {
    return (
        <div>
            <BackButton />
            <Flex vertical className='gap-small lg:gap-layout'>
                <HallInfoCard {...hallInfoCardData} />
                <HallMaintenanceCard {...hallMaintenanceCardData} />
            </Flex>
        </div>
    );
}
