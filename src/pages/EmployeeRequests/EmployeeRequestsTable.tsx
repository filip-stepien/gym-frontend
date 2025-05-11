import { CardTitle } from '@/components/CardTitle';
import { Button, Card, Space, Flex, Table, TableColumnsType, Tag } from 'antd';

interface DataType {
    key: React.Key;
    tag: string;
    firstname: string;
    lastname: string;
    date: string;
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'Type',
        dataIndex: 'tag',
        key: 'id',
        fixed: 'left',
        render: (tag: string) => <Tag>{tag}</Tag>,
        sorter: true
    },
    {
        title: 'First name',
        dataIndex: 'firstname',
        key: 'firstname',
        fixed: 'left',
        sorter: true
    },
    {
        title: 'Last name',
        dataIndex: 'lastname',
        key: 'lastname',
        sorter: true
    },
    {
        title: 'Data',
        dataIndex: 'date',
        key: 'date',
        sorter: true
    },

    {
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <a>Details</a>
    }
];

const dataSource: DataType[] = [
    {
        key: '1',
        tag: 'Membership Deletion',
        firstname: 'John',
        lastname: 'Pork',
        date: '21.02.2025'
    },
    {
        key: '2',
        tag: 'Membership Deletion',
        firstname: 'John',
        lastname: 'Pork',
        date: '21.02.2025'
    },
    {
        key: '3',
        tag: 'Membership Deletion',
        firstname: 'John',
        lastname: 'Pork',
        date: '21.02.2025'
    },
    {
        key: '4',
        tag: 'Membership Deletion',
        firstname: 'John',
        lastname: 'Pork',
        date: '21.02.2025'
    },
    {
        key: '5',
        tag: 'Membership Deletion',
        firstname: 'John',
        lastname: 'Pork',
        date: '21.02.2025'
    },
    {
        key: '6',
        tag: 'Membership Deletion',
        firstname: 'John',
        lastname: 'Pork',
        date: '21.02.2025'
    },
    {
        key: '7',
        tag: 'Membership Deletion',
        firstname: 'John',
        lastname: 'Pork',
        date: '21.02.2025'
    },
    {
        key: '8',
        tag: 'Membership Deletion',
        firstname: 'John',
        lastname: 'Pork',
        date: '21.02.2025'
    },
    {
        key: '9',
        tag: 'Membership Deletion',
        firstname: 'John',
        lastname: 'Pork',
        date: '21.02.2025'
    }
];

export function EmployeeRequestsTable() {
    return (
        <Card className='w-full'>
            <Flex justify='space-between'>
                <CardTitle title='Requests' icon='clients' />
                <Space>
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
