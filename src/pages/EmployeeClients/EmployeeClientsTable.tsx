import { CardTitle } from '@/components/CardTitle';
import { Button, Card, Space, Flex, Table, TableColumnsType, Badge } from 'antd';

interface DataType {
    key: React.Key;
    id: number;
    firstname: string;
    lastname: string;
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'Membership ID',
        dataIndex: 'id',
        key: 'id',
        fixed: 'left'
    },
    {
        title: 'First name',
        dataIndex: 'firstname',
        key: 'firstname',
        fixed: 'left'
    },
    {
        title: 'Last name',
        dataIndex: 'lastname',
        key: 'lastname'
    },
    {
        title: 'Membership status',
        key: 'status',
        render: () => <Badge status='success' text='Active' />
    },

    {
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <a>details</a>
    }
];

const dataSource: DataType[] = [
    { key: '1', id: 123, firstname: 'John', lastname: 'Pork' },
    { key: '2', id: 123, firstname: 'John', lastname: 'Pork' },
    { key: '3', id: 123, firstname: 'John', lastname: 'Pork' },
    { key: '4', id: 123, firstname: 'John', lastname: 'Pork' },
    { key: '5', id: 123, firstname: 'John', lastname: 'Pork' },
    { key: '6', id: 123, firstname: 'John', lastname: 'Pork' },
    { key: '7', id: 123, firstname: 'John', lastname: 'Pork' },
    { key: '8', id: 123, firstname: 'John', lastname: 'Pork' },
    { key: '9', id: 123, firstname: 'John', lastname: 'Pork' }
];

export function EmployeeClientsTable() {
    return (
        <Card className='w-full'>
            <Flex justify='space-between'>
                <CardTitle title='Clients' icon='clients' />
                <Space>
                    <Button type='primary' className='primary'>
                        + New
                    </Button>
                    <Button>Clear filters</Button>
                </Space>
            </Flex>
            <Table<DataType>
                pagination={false}
                columns={columns}
                dataSource={dataSource}
                scroll={{ x: 'max-content' }}
            />
        </Card>
    );
}
