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
    TimePicker
} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;

interface ExerciseRow {
    key: string;
    exercise: string;
    weight: number;
    reps: number;
}

export function ClientNewWorkout() {
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

    const handleChange = (value: any, key: string, column: keyof ExerciseRow) => {
        setDataSource(prev =>
            prev.map(item => (item.key === key ? { ...item, [column]: value } : item))
        );
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
        }
    ];

    return (
        <Card>
            <CardTitle title='New Workout' icon='newworkout' />

            <Flex align='flex-end' justify='space-between' className='w-full' wrap gap='large'>
                <Flex gap='large'>
                    <Flex vertical>
                        <Title level={5}>Date</Title>
                        <DatePicker placeholder='Select date' />
                    </Flex>
                    <Flex vertical>
                        <Title level={5}>Time</Title>
                        <TimePicker format='HH:mm' className='primary' placeholder='Select time' />
                    </Flex>
                    <Flex vertical>
                        <Title level={5}>Title</Title>
                        <Input placeholder='#1 Workout' />
                    </Flex>
                </Flex>

                <Space>
                    <Button type='primary' className='primary'>
                        Save
                    </Button>
                    <Button>Clear</Button>
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
    );
}
