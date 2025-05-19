import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { useParams } from 'react-router';
import { Flex, Row, Col, Space, Tag, Typography, Timeline } from 'antd';
import { Icon } from '@/components/Icon';
import dayjs from 'dayjs';
import { Avatar } from '@/components/Avatar';
import { BackButton } from '@/components/BackButton';

const { Title, Text } = Typography;

const WORKOUT_DETAILS = {
    title: 'New workout',
    timestamp: dayjs('2025-05-17'),
    targetMuscles: ['bicep', 'tricep', 'chest'],
    exercises: ['Bench press', 'Push up', 'Lateral raise', 'Pull up'],
    coach: 'John Pork',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nunc, gravida id nisi sed, pulvinar euismod tortor. Nam nec venenatis purus, at maximus mi. Duis aliquam nibh interdum, accumsan mi non, pharetra ipsum. Proin porta non dui et blandit.'
};

export function ClientWorkoutDetails() {
    const params = useParams();
    console.log(params.id);

    return (
        <div>
            <BackButton />
            <Card>
                <CardTitle icon='workout' title={WORKOUT_DETAILS.title} />
                <Flex className='pb-large pt-small'>
                    <Tag color='blue'>
                        <Space>
                            <Icon icon='calendar' />
                            {WORKOUT_DETAILS.timestamp.format('DD.MM.YYYY')}
                        </Space>
                    </Tag>
                    {WORKOUT_DETAILS.targetMuscles.map(muscle => (
                        <Tag color='blue-inverse'>{muscle}</Tag>
                    ))}
                </Flex>
                <Row className='gap-20'>
                    <Col className='gap-small flex flex-1 flex-col'>
                        <Flex gap='small'>
                            <Icon icon='avatar' />
                            <Title level={5}>Leading coach</Title>
                        </Flex>
                        <Flex vertical align='center' gap='small' className='p-middle'>
                            <Avatar />
                            <Text>{WORKOUT_DETAILS.coach}</Text>
                        </Flex>
                        <Flex gap='small' className='justify-start'>
                            <Icon icon='details' />
                            <Title level={5}>Description</Title>
                        </Flex>
                        <Flex className='text-justify'>
                            <Text>{WORKOUT_DETAILS.description}</Text>
                        </Flex>
                    </Col>
                    <Col className='gap-large flex flex-1 flex-col'>
                        <Flex gap='small' className='justify-start'>
                            <Icon icon='training-halls' />
                            <Title level={5}>Session plan</Title>
                        </Flex>
                        <Timeline items={WORKOUT_DETAILS.exercises.map(e => ({ children: e }))} />
                    </Col>
                </Row>
            </Card>
        </div>
    );
}
