import { Card } from '@/components/layout/Card';
import { CardTitle } from '@/components/common/CardTitle';
import { Flex, Button } from 'antd';
import type { Dayjs } from 'dayjs';

type HallMaintenanceCardProps = {
    employeeFirstName?: string;
    employeeLastName?: string;
    startTime?: Dayjs;
    endTime?: Dayjs;
    description?: string;
    onCancel?: () => void;
};

export function HallMaintenanceCard(props: HallMaintenanceCardProps) {
    const { employeeFirstName, employeeLastName, startTime, endTime, description, onCancel } =
        props;

    return (
        <Card>
            <CardTitle icon='details' title='Hall Maintenance' />
            <Flex className='gap-layout flex-col md:flex-row' wrap>
                <Flex vertical className='gap-layout flex-1'>
                    <div>
                        <div className='text-font-primary text-sm font-semibold'>Employee</div>
                        <div>
                            {employeeFirstName} {employeeLastName}
                        </div>
                    </div>
                    <div>
                        <div className='text-font-prima text-sm font-semibold'>Start Time</div>
                        <div>{startTime?.format('MM.DD.YYYY HH:mm')}</div>
                    </div>
                    <div>
                        <div className='text-font-prima text-sm font-semibold'>End Time</div>
                        <div>{endTime?.format('MM.DD.YYYY HH:mm')}</div>
                    </div>
                </Flex>
                <Flex className='pb-small flex-3'>
                    <div>
                        <div className='text-font-prima text-sm font-semibold'>Description</div>
                        <div className='mt-1 max-w-2xl text-justify'>{description}</div>
                    </div>
                </Flex>
            </Flex>
            <Flex className='gap-layout w-full' justify='end'>
                <Button color='danger' variant='solid' onClick={onCancel}>
                    Cancel
                </Button>
            </Flex>
        </Card>
    );
}
