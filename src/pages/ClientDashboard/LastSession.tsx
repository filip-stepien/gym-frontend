import { Statistic, Timeline, Button, Tag, Typography, Flex, Row, Space } from 'antd';
import { useState } from 'react';
import { Card } from '../../components/Card';
import { CardTitle } from '../../components/CardTitle';
import { ChatUser } from '../../components/Chat/ChatUser';

export function LastSession() {
    const { Text } = Typography;

    const exercises = [
        'Bent Over Row',
        'Bicep Curl',
        'Bench Press',
        'Deadlift',
        'Tricep Extension'
    ];
    const MAX_VISIBLE = 2;

    const [showAll, setShowAll] = useState(false);

    const visibleItems = showAll ? exercises : exercises.slice(0, MAX_VISIBLE);
    const hiddenCount = exercises.length - MAX_VISIBLE;

    return (
        <Card>
            <CardTitle title='Last Session' icon='avatar' />
            <Flex vertical className='h-full'>
                <Flex>
                    <Tag color='blue'>chest</Tag>
                    <Tag color='blue'>shoulders</Tag>
                </Flex>
                <Flex className='h-full'>
                    <ChatUser newMessageCount={0} fullName='John Pork' />
                </Flex>
                <Row className='h-full gap-3'>
                    <Statistic title='Exercises' value={6} />
                    <Statistic title='Total sets' value={25} />
                    <Statistic title='Volume' value='2,500 kg' />
                </Row>
                <Timeline className='h-full'>
                    {visibleItems.map((item, index) => (
                        <Timeline.Item key={index}>
                            <div className='text-title'>{item}</div>
                        </Timeline.Item>
                    ))}
                    {!showAll && hiddenCount > 0 && (
                        <Timeline.Item>
                            <Text
                                style={{ color: '#1890ff', cursor: 'pointer' }}
                                onClick={() => setShowAll(true)}
                            >
                                +{hiddenCount} more...
                            </Text>
                        </Timeline.Item>
                    )}
                </Timeline>
                <Space>
                    <Button type='primary' className='primary'>
                        + New Session
                    </Button>
                    <Button>Show Details</Button>
                </Space>
            </Flex>
        </Card>
    );
}
