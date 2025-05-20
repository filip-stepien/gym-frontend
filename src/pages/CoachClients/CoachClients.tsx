import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { Table, TableColumnsType } from 'antd';

interface DataType {
    key: React.Key;
    id: number;
    firstName: string;
    lastName: string;
    email: string;
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
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
    },
    {
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <a>Details</a>
    }
];

const dataSource: DataType[] = [
    { key: '1', id: 123, firstName: 'John', lastName: 'Pork', email: 'example@example.com' },
    { key: '2', id: 123, firstName: 'John', lastName: 'Pork', email: 'example@example.com' },
    { key: '3', id: 123, firstName: 'John', lastName: 'Pork', email: 'example@example.com' },
    { key: '5', id: 123, firstName: 'John', lastName: 'Pork', email: 'example@example.com' },
    { key: '6', id: 123, firstName: 'John', lastName: 'Pork', email: 'example@example.com' },
    { key: '7', id: 123, firstName: 'John', lastName: 'Pork', email: 'example@example.com' },
    { key: '8', id: 123, firstName: 'John', lastName: 'Pork', email: 'example@example.com' },
    { key: '9', id: 123, firstName: 'John', lastName: 'Pork', email: 'example@example.com' }
];

export function CoachClients() {
    return (
        <Card>
            <CardTitle title='Clients' icon='avatar' />
            <Table<DataType>
                columns={columns}
                dataSource={dataSource}
                scroll={{ x: 'max-content' }}
            />
        </Card>
    );
}
