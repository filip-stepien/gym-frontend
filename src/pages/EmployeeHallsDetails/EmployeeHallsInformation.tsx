import { CardTitle } from '@/components/CardTitle';
import { Card, Flex, Button, Badge } from 'antd';

export function EmployeeHallsInformation() {
    return (
        <Card>
            <CardTitle title='Hall Information' icon='info' />

            <Flex className='gap-layout'>
                <Flex vertical className='gap-layout flex-1'>
                    <div>
                        <div className='text-sm font-semibold text-gray-600'># Number</div>
                        <div className='text-font-primary text-base'>123</div>
                    </div>

                    <div>
                        <div className='text-sm font-semibold text-gray-600'>Type</div>
                        <div className='text-font-primary text-base'>Yoga</div>
                    </div>

                    <div>
                        <div className='text-sm font-semibold text-gray-600'>Status</div>
                        <Badge status='success' text='Available' />
                    </div>
                </Flex>
                <Flex className='flex-3'>
                    <div>
                        <div className='text-sm font-semibold text-gray-600'>Description</div>
                        <p className='mt-1 max-w-2xl text-gray-700'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet
                            feugiat sem, ut condimentum eros tincidunt dignissim.
                        </p>
                    </div>
                </Flex>
                <Flex className='gap-layout' align='end'>
                    <Button type='primary'>Begin Maintenance</Button>
                </Flex>
            </Flex>
        </Card>
    );
}
