import { Statistic, Timeline, Tag, Flex, Space, Avatar, Typography, Row, Col, Empty } from 'antd';
import { Link } from 'react-router';
import { Icon } from '@/components/Icon';
import { TimeLineItemProps } from 'antd/es/timeline/TimelineItem';
import { Dayjs } from 'dayjs';
import type { JSX } from 'react';

type LastSessionProps = {
    tags?: string[];
    exercises?: string[];
    coach?: string;
    timestamp?: Dayjs;
    totalExercises?: number;
    totalSets?: number;
    totalVolume?: number;
    actions?: JSX.Element[];
    detailsHref?: string;
};

const { Title } = Typography;

const MAX_EXERCISES_IN_COLUMN = 3;

export function LastSession(props: LastSessionProps) {
    const {
        tags = [],
        exercises = [],
        actions = [],
        totalExercises,
        totalSets,
        totalVolume,
        timestamp,
        coach,
        detailsHref
    } = props;

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
            children: <Link to={detailsHref ?? '/'}>+{exercisesLeft} More</Link>
        });
    }

    return (
        <Flex vertical>
            <Title level={5} className='text-font-secondary pb-small'>
                {timestamp?.format('DD.MM.YYYY - HH:mm')}
            </Title>
            <Flex vertical className={coach && 'gap-large'}>
                <Flex>
                    {tags?.map(tag => (
                        <Tag key={tag} color='blue'>
                            {tag}
                        </Tag>
                    ))}
                </Flex>
                <Row className='gap-x-20'>
                    <Col>
                        <Flex vertical className='gap-small'>
                            {coach && (
                                <Space align='center'>
                                    <Avatar shape='square' icon={<Icon icon='avatar' />} />
                                    <Title level={5}>{coach}</Title>
                                </Space>
                            )}
                            <div className='py-middle gap-small sm:gap-large flex items-start'>
                                <Statistic title='Exercises' value={totalExercises ?? '-'} />
                                <Statistic title='Total sets' value={totalSets ?? '-'} />
                                <Statistic
                                    title='Volume'
                                    value={totalVolume ? totalVolume + ' kg' : '-'}
                                />
                            </div>
                        </Flex>
                    </Col>
                    <Col>
                        {exercises.length > 0 ? (
                            <Flex className='gap-large justify-around'>
                                <Timeline items={leftTimeLineColumnItems} />
                                <Timeline items={rightTimeLineColumnItmes} />
                            </Flex>
                        ) : (
                            <Empty />
                        )}
                    </Col>
                </Row>
            </Flex>
            <Space className='mt-auto self-end'>
                {actions?.map((action, i) => <div key={i}>{action}</div>)}
            </Space>
        </Flex>
    );
}
