import { Statistic, Tag, Flex, Space, Avatar, Typography, Row, Col } from 'antd';
import { Icon } from '../common/Icon';
import { CardTitle } from '../common/CardTitle';
import { Card } from '../layout/Card';
import type { JSX } from 'react';
import { SessionPlan } from '../common/SessionPlan';
import { DataStateWrapper } from '../common/DataStateWrapper';

type LastSessionProps = {
    tags?: string[];
    exercises?: string[];
    coach?: string;
    date?: string;
    totalSets?: number;
    totalVolume?: number;
    actions?: JSX.Element[];
    detailsHref?: string;
    isLoading?: boolean;
    isEmpty?: boolean;
};

const { Title } = Typography;

export function LastSessionCard(props: LastSessionProps) {
    const {
        tags = [],
        exercises = [],
        actions = [],
        totalSets,
        totalVolume,
        date,
        coach,
        detailsHref,
        isLoading,
        isEmpty
    } = props;

    return (
        <Card>
            <CardTitle title='Last Session' icon='sessions' />
            <DataStateWrapper isLoading={isLoading} isEmpty={isEmpty}>
                <Title level={5} className='text-font-secondary pb-small'>
                    {date}
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
                                    <Space align='center' className='flex items-center'>
                                        <Avatar
                                            shape='square'
                                            size='large'
                                            icon={<Icon icon='avatar' />}
                                        />
                                        <Flex vertical>
                                            <span className='text-md'>Coach</span>
                                            <Title level={5}>{coach}</Title>
                                        </Flex>
                                    </Space>
                                )}
                                <div className='py-middle gap-small sm:gap-large flex items-start'>
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
            </DataStateWrapper>
        </Card>
    );
}
