import { Button, Flex, Progress, Statistic, Col, Row, Space } from 'antd';
import { Card } from '../../components/Card';
import { CardTitle } from '../../components/CardTitle';

export function Membership() {
    return (
        <Card>
            <CardTitle title='Membership' icon='membership' />
            <Row justify='space-between' className='w-'>
                <Col>
                    <Flex align='center' className='h-full'>
                        <Statistic title='Type' value='Standard' />
                    </Flex>
                </Col>
                <Col>
                    <Flex vertical justify='center' className='h-full'>
                        <Progress
                            type='circle'
                            percent={75}
                            format={() => (
                                <div className='text-font-secondary text-sm'>30 days left</div>
                            )}
                            strokeColor='#007bff'
                            size={125}
                        />
                    </Flex>
                </Col>
                <Col>
                    <Space direction='vertical' size={'middle'}>
                        <div>
                            <Statistic title='Last Payment' value='01.01.2025' />
                            <Statistic title='Valid Until' value='20.02.2025' />
                        </div>
                        <Space>
                            <Button type='primary' className='bg-blue-500'>
                                Extend
                            </Button>
                            <Button>Show Details</Button>
                        </Space>
                    </Space>
                </Col>
            </Row>
        </Card>
    );
}
