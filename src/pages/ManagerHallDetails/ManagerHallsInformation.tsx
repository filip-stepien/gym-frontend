import { CardTitle } from '@/components/CardTitle';
import { Card, Flex, Button, Badge } from 'antd';

interface HallInformationProps {
    id: number;
    halltype: string;
    status: string;
    description: string;
}

export function ManagerHallsInformation(props: HallInformationProps) {
    const { id, halltype, status, description } = props;

    let badgeStatus: 'success' | 'warning' | 'error' | 'default';

    switch (status) {
        case 'Available':
            badgeStatus = 'success';
            break;
        case 'Under Maintance':
            badgeStatus = 'warning';
            break;
        case 'Busy':
            badgeStatus = 'error';
            break;
        default:
            badgeStatus = 'default';
    }

    return (
        <Card>
            <CardTitle title='Hall Information' icon='info' />

            <Flex className='gap-layout'>
                <Flex vertical className='gap-layout flex-1'>
                    <div>
                        <div className='text-sm font-semibold text-gray-600'># Number</div>
                        <div className='text-font-primary text-base'>{id}</div>
                    </div>

                    <div>
                        <div className='text-sm font-semibold text-gray-600'>Type</div>
                        <div className='text-font-primary text-base'>{halltype}</div>
                    </div>

                    <div>
                        <div className='text-sm font-semibold text-gray-600'>Status</div>
                        <Badge status={badgeStatus} text={status} />
                    </div>
                </Flex>
                <Flex className='flex-3'>
                    <div>
                        <div className='text-sm font-semibold text-gray-600'>Description</div>
                        <p className='mt-1 max-w-2xl text-gray-700'>{description}</p>
                    </div>
                </Flex>
                <Flex className='gap-layout' align='end'>
                    <Button type='primary'>Begin Maintenance</Button>
                </Flex>
            </Flex>
        </Card>
    );
}
