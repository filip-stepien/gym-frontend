import { Statistic, Tag, Flex, Space, Avatar, Typography, Row, Col } from 'antd';
import { Icon } from '../common/Icon';
import { CardTitle } from '../common/CardTitle';
import { Card } from '../layout/Card';
import type { Dayjs } from 'dayjs';
import type { JSX } from 'react';
import { SessionPlan } from '../common/SessionPlan';

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

export function LastSessionCard(props: LastSessionProps) {
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

    return (
        <Card>
            <CardTitle title='Last Session' icon='sessions' />
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
                        <SessionPlan
                            exercises={exercises}
                            detailsHref={detailsHref}
                            maxInColumn={3}
                        />
                    </Col>
                </Row>
            </Flex>
            <Space className='mt-auto self-end'>
                {actions?.map((action, i) => <div key={i}>{action}</div>)}
            </Space>
        </Card>
    );
}
