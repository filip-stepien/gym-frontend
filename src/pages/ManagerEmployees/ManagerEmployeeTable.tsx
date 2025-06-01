import { CardTitle } from '@/components/common/CardTitle';
import { Tag, Button, Card, Flex, Table, TableColumnsType } from 'antd';

interface DataType {
    key: React.Key;
    id: number;
    firstname: string;
    lastname: string;
    position: string;
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'Employees ID',
        dataIndex: 'id',
        key: 'id',
        fixed: 'left',
        sorter: (a, b) => a.id - b.id
    },
    {
        title: 'First name',
        dataIndex: 'firstname',
        key: 'firstname',
        fixed: 'left',
        sorter: (a, b) => a.firstname.localeCompare(b.firstname)
    },
    {
        title: 'Last name',
        dataIndex: 'lastname',
        key: 'lastname',
        sorter: (a, b) => a.lastname.localeCompare(b.lastname)
    },
    {
        title: 'Position',
        dataIndex: 'position',
        key: 'position',
        sorter: (a, b) => a.position.localeCompare(b.position),
        render: (position: string) => <Tag>{position}</Tag>
    },

    {
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <a href='employees/details'>Details</a>
    }
];

const dataSource: DataType[] = [
    { key: '1', id: 1, firstname: 'Bob', lastname: 'Pork', position: 'Coach' },
    { key: '2', id: 123, firstname: 'Aron', lastname: 'Pork', position: 'Coach' },
    { key: '3', id: 3, firstname: 'John', lastname: 'Pork', position: 'Coach' },
    { key: '4', id: 123, firstname: 'John', lastname: 'Pork', position: 'Coach' },
    { key: '5', id: 2, firstname: 'John', lastname: 'Pork', position: 'Coach' },
    { key: '6', id: 123, firstname: 'John', lastname: 'Pork', position: 'Coach' },
    { key: '7', id: 123, firstname: 'John', lastname: 'Ant', position: 'Coach' },
    { key: '8', id: 123, firstname: 'John', lastname: 'Design', position: 'Coach' },
    { key: '9', id: 123, firstname: 'John', lastname: 'Pork', position: 'Coach' }
];

export function ManagerEmployeeTable() {
    return (
        <Card className='w-full'>
            <Flex vertical className='gap-layout'>
                <Flex justify='space-between'>
                    <CardTitle title='Employees' icon='employees' />

                    <Button type='primary' className='primary' href='new-employee'>
                        + New
                    </Button>
                </Flex>
                <Table<DataType>
                    pagination={false}
                    columns={columns}
                    dataSource={dataSource}
                    scroll={{ x: 'max-content' }}
                />
            </Flex>
        </Card>
    );
}
