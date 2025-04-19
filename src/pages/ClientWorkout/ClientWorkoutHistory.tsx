import { CardTitle } from '@/components/CardTitle';
import { Icon } from '@/components/Icon';
import { Card, Flex, Calendar, Space, List, Tag, Typography } from 'antd';

const { Title } = Typography;

const data = [
    {
        title: '#1 Workout',
        time: '12:38',
        exercise: 'chest'
    },
    {
        title: '#2 Workout',
        time: '15:23',
        exercise: 'shoulders'
    }
];

export function ClientWorkoutHistory() {
    return (
        <Card>
            <CardTitle title='Workout History' icon='calendar' />
            <Flex>
                <Flex vertical className='w-full'>
                    <Calendar fullscreen={false} />
                </Flex>
                <Flex vertical className='h-full w-full justify-between'>
                    <Title level={3}>17 March 2025</Title>
                    <List
                        itemLayout='horizontal'
                        dataSource={data}
                        renderItem={item => (
                            <List.Item actions={[<a key='list-loadmore-edit'>details</a>]}>
                                <List.Item.Meta
                                    title={<span className='text-font-primary'>{item.title}</span>}
                                />
                                <Tag>
                                    <Space>
                                        <Icon icon='clock' />
                                        {item.time}
                                    </Space>
                                </Tag>
                                <Tag color='blue'>{item.exercise}</Tag>
                                <Tag color='blue'>{item.exercise}</Tag>
                            </List.Item>
                        )}
                    />
                </Flex>
            </Flex>
        </Card>
    );
}
