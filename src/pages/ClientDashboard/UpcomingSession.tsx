import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { Flex, Button, Calendar, Pagination, Space, List, Avatar } from 'antd';
import { Icon } from '@/components/Icon';

const data = [
    {
        name: 'John Pork',
        title: 'Full body workout',
        time: '13:00'
    },
    {
        name: 'John Pork',
        title: 'Full body workout',
        time: '14:00'
    }
];

export function UpcomingSession() {
    return (
        <Card>
            <CardTitle title='Upcoming session' icon='sessions' />
            <Flex>
                <Flex vertical className='w-full'>
                    <Calendar fullscreen={false} />
                </Flex>
                <Flex vertical className='h-full w-full justify-between'>
                    <Flex vertical className='w-full' justify='space-between'>
                        <List
                            itemLayout='horizontal'
                            dataSource={data}
                            renderItem={item => (
                                <List.Item actions={[<a key='list-loadmore-edit'>details</a>]}>
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
                        <Space>
                            <Button type='primary' className='primary'>
                                + Join Session
                            </Button>
                            <Button>Show Full Callendar</Button>
                        </Space>
                    </Flex>
                </Flex>
            </Flex>
        </Card>
    );
}
