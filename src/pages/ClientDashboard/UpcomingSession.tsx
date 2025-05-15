import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { Avatar } from '@/components/Avatar';
import { Flex, Button, Calendar, Pagination, List, Col, Row } from 'antd';

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
            <Row className='gap-large'>
                <Col flex='' className='flex-1'>
                    <Calendar fullscreen={false} />
                </Col>
                <Col className='flex flex-1 flex-col justify-between'>
                    <List
                        itemLayout='horizontal'
                        dataSource={data}
                        renderItem={item => (
                            <List.Item actions={[<a key='list-loadmore-edit'>Details</a>]}>
                                <List.Item.Meta
                                    avatar={<Avatar />}
                                    title={item.time + ' | ' + item.title}
                                    description='A complete workout that targets all muscle.'
                                />
                            </List.Item>
                        )}
                    />
                    <Flex align='flex-end'>
                        <Pagination
                            defaultCurrent={1}
                            total={50}
                            showSizeChanger={false}
                            pageSize={10}
                            className='w-full'
                            align='center'
                        />
                        <Button type='primary' className='primary'>
                            + Join Session
                        </Button>
                        <Button>Show Full Callendar</Button>
                    </Flex>
                </Col>
            </Row>
        </Card>
    );
}
