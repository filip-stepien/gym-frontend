import { Button, Progress, Statistic, Space, Col, Row, Flex } from 'antd';
import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';

export function Membership() {
    return (
        <Card className='h-full flex-1'>
            <CardTitle title='Membership' icon='membership' />
            <Flex vertical justify='center' align='center' className='h-full'>
                <Row justify='center' className='p-large'>
                    <Progress
                        type='circle'
                        percent={75}
                        format={() => (
                            <div className='text-font-secondary text-sm'>30 days left</div>
                        )}
                        strokeColor='#007bff'
                        size={125}
                    />
                </Row>
                <Row justify='center' className='gap-x-large p-small'>
                    <Col>
                        <Statistic title='Last Payment' value='01.01.2025' />
                    </Col>
                    <Col>
                        <Statistic title='Valid Until' value='20.02.2025' />
                    </Col>
                </Row>
            </Flex>
            <Space className='self-end'>
                <Button type='primary' className='bg-blue-500'>
                    Extend
                </Button>
                <Button>Show Details</Button>
            </Space>
        </Card>
    );
}
