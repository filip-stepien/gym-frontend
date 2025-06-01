import { Card } from '@/components/layout/Card';
import { CardTitle } from '@/components/common/CardTitle';
import { Flex, Row, Col, Space, Tag, Typography, TableColumnsType, Table, Button } from 'antd';
import { Icon } from '@/components/common/Icon';
import { Dayjs } from 'dayjs';
import { Avatar } from '@/components/common/Avatar';
import { BackButton } from '@/components/layout/BackButton';
import { SessionPlan } from '../common/SessionPlan';

type WorkoutDetailsCardProps = {
    title?: string;
    coach?: string;
    description?: string;
    timestamp?: Dayjs;
    targetMuscles?: string[];
    exercises?: string[];
    clients?: {
        id: string;
        firstName: string;
        lastName: string;
    }[];
};

type DataType = {
    key: React.Key;
    firstName: string;
    lastName: string;
};

const { Title, Text } = Typography;

const columns: TableColumnsType<DataType> = [
    {
        title: 'First name',
        dataIndex: 'firstName',
        key: 'firstName',
        fixed: 'left'
    },
    {
        title: 'Last name',
        dataIndex: 'lastName',
        key: 'lastName'
    },
    {
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => (
            <Button type='link' href='/coach/client/xd'>
                Details
            </Button>
        )
    }
];

export function WorkoutDetailsCard(props: WorkoutDetailsCardProps) {
    const {
        title,
        coach,
        description,
        timestamp,
        exercises = [],
        targetMuscles = [],
        clients = []
    } = props;

    const dataSource: DataType[] | undefined = clients.map(client => ({
        key: client.id,
        firstName: client.firstName,
        lastName: client.lastName
    }));

    return (
        <div>
            <BackButton />
            <Card>
                <CardTitle icon='workout' title={title ?? 'Workout Title'} />
                <Flex className='pb-small lg:pb-large pt-small'>
                    {timestamp && (
                        <Tag color='blue'>
                            <Space>
                                <Icon icon='calendar' />
                                {timestamp.format('DD.MM.YYYY')}
                            </Space>
                        </Tag>
                    )}
                    {targetMuscles.map(muscle => (
                        <Tag color='blue-inverse'>{muscle}</Tag>
                    ))}
                </Flex>
                <Row className='gap-small flex-col md:flex-row md:gap-20'>
                    <Col className='mb-small flex flex-col md:flex-1'>
                        {coach && (
                            <>
                                <Flex gap='small'>
                                    <Icon icon='avatar' />
                                    <Title level={5}>Leading coach</Title>
                                </Flex>
                                <Flex vertical className='p-middle'>
                                    <Flex vertical justify='center' align='center' gap='small'>
                                        <Avatar />
                                        <Text>{coach}</Text>
                                    </Flex>
                                </Flex>
                            </>
                        )}
                        <Flex gap='small' className='mb-small justify-start'>
                            <Icon icon='details' />
                            <Title level={5}>Description</Title>
                        </Flex>
                        <Flex className='text-justify'>
                            <Text>{description}</Text>
                        </Flex>
                    </Col>
                    <Col className='gap-large flex flex-1 flex-col'>
                        <Flex gap='small' className='justify-start'>
                            <Icon icon='training-halls' />
                            <Title level={5}>Session plan</Title>
                        </Flex>
                        <SessionPlan exercises={exercises} />
                    </Col>
                </Row>
                {clients && clients.length > 0 ? (
                    <>
                        <Flex gap='small' className='pt-small mb-small justify-start'>
                            <Icon icon='avatar' />
                            <Title level={5}>Trainees</Title>
                        </Flex>
                        <Table<DataType>
                            columns={columns}
                            dataSource={dataSource}
                            scroll={{ x: 'max-content' }}
                        />
                    </>
                ) : (
                    <div></div>
                )}
            </Card>
        </div>
    );
}
