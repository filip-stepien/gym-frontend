import { InputNumber, Button, Flex, Table } from 'antd';
import { Icon } from './Icon';
import { SearchDropdown } from './SearchDropdown';
import { Dispatch, SetStateAction } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import { ExerciseRow } from '../cards/NewWorkoutCard';

type ExerciseTableProps = {
    exerciseRows?: ExerciseRow[];
    setExerciseRow?: Dispatch<SetStateAction<ExerciseRow[]>>;
    exerciseSearchOptions?: string[];
    onSave?: () => void;
    saveButtonLabel?: string;
};

export function ExerciseTable(props: ExerciseTableProps) {
    const {
        exerciseSearchOptions = [],
        exerciseRows = [],
        saveButtonLabel = 'Save',
        onSave = () => {},
        setExerciseRow = () => {}
    } = props;

    const menuItems = exerciseSearchOptions.map(e => ({ key: e, label: e }));

    const handleChange = (value: string, key: string, column: keyof ExerciseRow) => {
        setExerciseRow(prev =>
            prev.map(item => (item.key === key ? { ...item, [column]: value } : item))
        );
    };

    const handleDelete = (key: string) => {
        setExerciseRow(prev => prev.filter(e => e.key !== key));
    };

    const handleAddRow = () => {
        const newKey = (exerciseRows.length + 1).toString();
        const newRow: ExerciseRow = {
            key: newKey,
            exercise: '',
            weight: 0,
            reps: 0
        };
        setExerciseRow([...exerciseRows, newRow]);
    };

    const columns: ColumnsType<ExerciseRow> = [
        {
            title: '#',
            dataIndex: 'key',
            key: 'key',
            render: (_, __, index) => index + 1,
            fixed: 'left'
        },
        {
            title: '*Exercise',
            dataIndex: 'exercise',
            render: (_, record) => (
                <SearchDropdown
                    placeholder='Select exercise'
                    menuItems={menuItems}
                    onSelect={item => handleChange(item.label, record.key, 'exercise')}
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
                    className='w-[65px]'
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
                    className='w-[65px]'
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
        <Flex vertical>
            <Table
                className='mt-4'
                dataSource={exerciseRows}
                columns={columns}
                pagination={false}
                bordered
                scroll={{ x: 'max-content' }}
            />
            <Flex gap='small'>
                <Button
                    type='dashed'
                    onClick={handleAddRow}
                    block
                    icon={<PlusOutlined />}
                    className='mt-2'
                >
                    Add row
                </Button>
            </Flex>
            <Flex justify='end'>
                <Button type='primary' className='mt-middle' onClick={onSave} variant='outlined'>
                    {saveButtonLabel ?? 'Save'}
                </Button>
            </Flex>
        </Flex>
    );
}
