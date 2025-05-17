import { useState } from 'react';
import { CardTitle } from '@/components/CardTitle';
import {
    Button,
    Card,
    DatePicker,
    Flex,
    Input,
    InputNumber,
    Space,
    Table,
    Typography,
    TimePicker,
    Modal
} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { PlusOutlined } from '@ant-design/icons';
import { Icon } from '@/components/Icon';
import dayjs from 'dayjs';

const { Title } = Typography;

interface ExerciseRow {
    key: string;
    exercise: string;
    weight: number;
    reps: number;
}

export function ClientNewWorkout() {
    const [titleError, setTitleError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [timeError, setTimeError] = useState(false);
    const [modalOpened, setModalOpened] = useState(false);
    const [date, setDate] = useState(dayjs());
    const [time, setTime] = useState(dayjs());
    const [title, setTitle] = useState('New workout');
    const [dataSource, setDataSource] = useState<ExerciseRow[]>([
        {
            key: '1',
            exercise: 'Bench press',
            weight: 100,
            reps: 3
        },
        {
            key: '2',
            exercise: 'Leg extensions',
            weight: 80,
            reps: 8
        }
    ]);

    const handleChange = (value: string, key: string, column: keyof ExerciseRow) => {
        setDataSource(prev =>
            prev.map(item => (item.key === key ? { ...item, [column]: value } : item))
        );
    };

    const handleDelete = (key: string) => {
        setDataSource(prev => prev.filter(e => e.key !== key));
    };

    const handleAddRow = () => {
        const newKey = (dataSource.length + 1).toString();
        const newRow: ExerciseRow = {
            key: newKey,
            exercise: '',
            weight: 0,
            reps: 0
        };
        setDataSource([...dataSource, newRow]);
    };

    const handleSave = () => {
        setDateError(date === null);
        setTimeError(time === null);
        setTitleError(title === '');

        if (date && time && title) {
            setModalOpened(true);
        }
    };

    const columns: ColumnsType<ExerciseRow> = [
        {
            title: '#',
            dataIndex: 'key',
            key: 'key',
            render: (_, __, index) => index + 1
        },
        {
            title: '*Exercise',
            dataIndex: 'exercise',
            render: (text, record) => (
                <Input
                    value={text}
                    onChange={e => handleChange(e.target.value, record.key, 'exercise')}
                />
            )
        },
        {
            title: '*Weight',
            dataIndex: 'weight',
            render: (text, record) => (
                <InputNumber
                    value={text}
                    min={0}
                    onChange={value => handleChange(value, record.key, 'weight')}
                />
            )
        },
        {
            title: '*Reps',
            dataIndex: 'reps',
            render: (text, record) => (
                <InputNumber
                    value={text}
                    min={0}
                    onChange={value => handleChange(value, record.key, 'reps')}
                />
            )
        },
        {
            render: (_, record) => (
                <Button
                    icon={<Icon icon='close' />}
                    color='danger'
                    variant='link'
                    onClick={() => handleDelete(record.key)}
                />
            )
        }
    ];

    return (
        <>
            <Modal
                title='Save workout'
                open={modalOpened}
                onOk={() => setModalOpened(false)}
                onCancel={() => setModalOpened(false)}
            >
                <p>Are you sure you want to save the workout?</p>
                <p>Any unfinished exercise sets will be lost.</p>
            </Modal>
            <Card>
                <CardTitle title='New Workout' icon='newworkout' className='pb-middle' />
                <Flex align='flex-end' justify='space-between' className='w-full' wrap gap='large'>
                    <Flex gap='large'>
                        <Flex vertical gap='small'>
                            <Title level={5}>Date</Title>
                            <DatePicker
                                placeholder='Select date'
                                value={date}
                                onChange={date => setDate(date)}
                                status={dateError ? 'error' : undefined}
                            />
                        </Flex>
                        <Flex vertical gap='small'>
                            <Title level={5}>Time</Title>
                            <TimePicker
                                format='HH:mm'
                                className='primary'
                                placeholder='Select time'
                                value={time}
                                onChange={time => setTime(time)}
                                status={timeError ? 'error' : undefined}
                            />
                        </Flex>
                        <Flex vertical gap='small'>
                            <Title level={5}>Title</Title>
                            <Input
                                placeholder='Workout Title'
                                value={title}
                                onChange={event => setTitle(event.target.value)}
                                status={titleError ? 'error' : undefined}
                            />
                        </Flex>
                    </Flex>

                    <Space>
                        <Button type='primary' className='primary' onClick={handleSave}>
                            Save
                        </Button>
                    </Space>
                </Flex>

                <Table
                    className='mt-4'
                    dataSource={dataSource}
                    columns={columns}
                    pagination={false}
                    bordered
                />
                <Button
                    type='dashed'
                    onClick={handleAddRow}
                    block
                    icon={<PlusOutlined />}
                    className='mt-2'
                >
                    Add row
                </Button>
            </Card>
        </>
    );
}
