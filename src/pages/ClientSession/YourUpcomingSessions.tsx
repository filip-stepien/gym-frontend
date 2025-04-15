import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { Icon } from '@/components/Icon';
import { Flex, Button, Pagination, List, Avatar, Space } from 'antd';

const data = [
    {
        title: 'Full body workout',
        time: '13:00-14:00',
        name: 'John Pork'
    },
    {
        title: 'Full body workout',
        time: '14:00-15:00',
        name: 'John Pork'
    },
    {
        title: 'Full body workout',
        time: '15:00-16:00',
        name: 'John Pork'
    },
    {
        title: 'Full body workout',
        time: '14:00-15:00',
        name: 'John Pork'
    }
];

export function YourUpcomingSession() {
    return (
        <Card>
            <CardTitle title='Your Upcoming Sessions' icon='sessions' />
            <p className='text-font-primary text-xl font-bold'>17 March 2025</p>
            <Flex>
                <Flex vertical className='h-full w-full justify-between'>
                    <Flex
                        vertical
                        className='h-70 w-full overflow-y-scroll'
                        justify='space-between'
                    >
                        <List
                            itemLayout='horizontal'
                            dataSource={data}
                            renderItem={item => (
                                <List.Item
                                    actions={[
                                        <a key='list-loadmore-edit'>Details</a>,
                                        <a key='list-loadmore-edit' className='text-danger'>
                                            Cancel
                                        </a>
                                    ]}
                                >
                                    <List.Item.Meta
                                        avatar={
                                            <Space direction='vertical' align='center'>
                                                <Avatar
                                                    shape='square'
                                                    icon={<Icon icon='avatar' />}
                                                />
                                                <span>{item.name}</span>
                                            </Space>
                                        }
                                        title={<p>{item.title}</p>}
                                        description='A complete workout that targets all muscle.'
                                    />
                                    <div>
                                        <p>{item.time}</p>
                                    </div>
                                </List.Item>
                            )}
                        />
                    </Flex>
                    <Flex justify='space-between'>
                        <Pagination
                            defaultCurrent={1}
                            total={50}
                            showSizeChanger={false}
                            pageSize={10}
                            className='w-full'
                            align='center'
                        />

                        <Button type='primary' className='primary'>
                            Session history
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Card>
    );
}
