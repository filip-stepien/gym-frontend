import { Statistic, Timeline, Button, Tag, Flex, Space, Avatar, Typography, Row, Col } from 'antd';
import { Link } from 'react-router';
import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { Icon } from '@/components/Icon';
import { TimeLineItemProps } from 'antd/es/timeline/TimelineItem';

const { Title } = Typography;

const tags = ['chest', 'shoulders'];

const exercises = [
    'Bent Over Row',
    'Bicep Curl',
    'Bench Press',
    'Deadlift',
    'Tricep Extension',
    'e',
    'a'
];

const coach = 'John Pork';

// const

const MAX_EXERCISES_IN_COLUMN = 3;

export function LastSession() {
    const leftTimeLineColumnItems: TimeLineItemProps[] = exercises
        .slice(0, MAX_EXERCISES_IN_COLUMN)
        .map(exercise => ({
            children: exercise
        }));

    const rightTimeLineColumnItmes: TimeLineItemProps[] = exercises
        .slice(MAX_EXERCISES_IN_COLUMN, MAX_EXERCISES_IN_COLUMN * 2 - 1)
        .map(exercise => ({
            children: exercise
        }));

    const displayMoreExercisesLabel = exercises.length > MAX_EXERCISES_IN_COLUMN * 2 - 1;
    const exercisesLeft = exercises.length - MAX_EXERCISES_IN_COLUMN * 2 + 1;

    if (displayMoreExercisesLabel) {
        rightTimeLineColumnItmes.push({
            children: <Link to={'/elo'}>+{exercisesLeft} More</Link>
        });
    }

    return (
        <Card className='w-full'>
            <CardTitle title='Last Session' icon='avatar' />
            <Flex vertical className='gap-large'>
                <Flex>
                    {tags.map(tag => (
                        <Tag key={tag} color='blue'>
                            {tag}
                        </Tag>
                    ))}
                </Flex>
                <Row className='gap-x-20'>
                    <Col>
                        <Flex vertical className='gap-small'>
                            <Space align='center'>
                                <Avatar shape='square' icon={<Icon icon='avatar' />} />
                                <Title level={5}>{coach}</Title>
                            </Space>
                            <Space size='large' className='py-middle'>
                                <Statistic title='Exercises' value={6} />
                                <Statistic title='Total sets' value={25} />
                                <Statistic title='Volume' value='2,500 kg' />
                            </Space>
                        </Flex>
                    </Col>
                    <Col>
                        <Flex className='gap-large justify-around'>
                            <Timeline items={leftTimeLineColumnItems} />
                            <Timeline items={rightTimeLineColumnItmes} />
                        </Flex>
                    </Col>
                </Row>
            </Flex>
            <Space className='mt-auto self-end'>
                <Button type='primary' className='primary'>
                    + New Session
                </Button>
                <Button>Show Details</Button>
            </Space>
        </Card>
    );
}
