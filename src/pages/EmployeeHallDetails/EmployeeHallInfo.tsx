import { CardTitle } from '@/components/CardTitle';
import { Card } from '@/components/Card';
import { Flex, Button, Badge } from 'antd';

const data = {
    id: 1,
    halltype: 'yoga',
    status: 'Busy',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iste optio sapiente omnis rem nulla quis nostrum corporis sunt pariatur neque rerum, dolores tenetur dolorem laboriosam culpa sit debitis, repellendus excepturi natus expedita possimus quibusdam modi et. Ullam vero quo iusto tempore vitae facere asperiores repudiandae exercitationem! Culpa, dolor sunt.'
};

export function EmployeeHallInfo() {
    const { id, halltype, status, description } = data;

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
            <Flex className='gap-layout flex-col md:flex-row' wrap>
                <Flex vertical className='gap-layout flex-1'>
                    <div>
                        <div className='text-font-primary text-sm font-semibold'>Number</div>
                        <div>{id}</div>
                    </div>

                    <div>
                        <div className='text-font-prima text-sm font-semibold'>Type</div>
                        <div>{halltype}</div>
                    </div>

                    <div>
                        <div className='text-font-prima text-sm font-semibold'>Status</div>
                        <Badge status={badgeStatus} text={status} />
                    </div>
                </Flex>
                <Flex className='flex-3'>
                    <div>
                        <div className='text-font-prima text-sm font-semibold'>Description</div>
                        <div className='mt-1 max-w-2xl text-justify'>{description}</div>
                    </div>
                </Flex>
            </Flex>
            <Flex className='gap-layout w-full' justify='end'>
                <Button type='primary'>Begin Maintenance</Button>
            </Flex>
        </Card>
    );
}
