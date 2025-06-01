import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { Flex, Button } from 'antd';

const data = {
    employee: 'John Pork',
    date: '21.02.2002',
    time: '14:00 - 15:00',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iste optio sapiente omnis rem nulla quis nostrum corporis sunt pariatur neque rerum, dolores tenetur dolorem laboriosam culpa sit debitis, repellendus excepturi natus expedita possimus quibusdam modi et. Ullam vero quo iusto tempore vitae facere asperiores repudiandae exercitationem! Culpa, dolor sunt.'
};

export function EmployeeHallDetailsMaintenance() {
    const { employee, date, time, description } = data;
    return (
        <Card>
            <CardTitle icon='details' title='Hall Maintenance' />
            <Flex className='gap-layout flex-col md:flex-row' wrap>
                <Flex vertical className='gap-layout flex-1'>
                    <div>
                        <div className='text-font-primary text-sm font-semibold'>Employee</div>
                        <div>{employee}</div>
                    </div>

                    <div>
                        <div className='text-font-prima text-sm font-semibold'>Date</div>
                        <div>{date}</div>
                    </div>

                    <div>
                        <div className='text-font-prima text-sm font-semibold'>Time</div>
                        <div>{time}</div>
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
                <Button color='danger' variant='solid'>
                    Cancel
                </Button>
            </Flex>
        </Card>
    );
}
