import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { useParams } from 'react-router';
import {
    Flex,
    Row,
    Col,
    Space,
    Tag,
    Typography,
    Timeline,
    TableColumnsType,
    Table,
    Empty
} from 'antd';
import { Icon } from '@/components/Icon';
import { Dayjs } from 'dayjs';
import { Avatar } from '@/components/Avatar';
import { BackButton } from '@/components/BackButton';

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
        render: () => <a>Details</a>
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

    const params = useParams();
    console.log(params.id);

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
                <Flex className='pb-large pt-small'>
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
                <Row className='gap-20'>
                    <Col className='gap-small flex flex-1 flex-col'>
                        {coach && (
                            <>
                                <Flex gap='small'>
                                    <Icon icon='avatar' />
                                    <Title level={5}>Leading coach</Title>
                                </Flex>
                                <Flex vertical align='center' gap='small' className='p-middle'>
                                    <Avatar />
                                    <Text>{coach}</Text>
                                </Flex>
                            </>
                        )}
                        <Flex gap='small' className='justify-start'>
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
                        {exercises.length > 0 ? (
                            <Timeline items={exercises.map(e => ({ children: e }))} />
                        ) : (
                            <Empty />
                        )}
                    </Col>
                </Row>
                {clients && clients.length > 0 ? (
                    <>
                        <Flex gap='small' className='pt-small justify-start'>
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
