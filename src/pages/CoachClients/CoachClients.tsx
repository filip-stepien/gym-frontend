import { Card } from '@/components/layout/Card';
import { CardTitle } from '@/components/common/CardTitle';
import { Button, Table, TableColumnsType } from 'antd';

interface DataType {
    key: React.Key;
    firstName: string;
    lastName: string;
    email: string;
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'First name',
        dataIndex: 'firstName',
        key: 'firstName',
        sorter: (a, b) => a.firstName.localeCompare(b.firstName)
    },
    {
        title: 'Last name',
        dataIndex: 'lastName',
        key: 'lastName',
        sorter: (a, b) => a.lastName.localeCompare(b.lastName)
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        sorter: (a, b) => a.email.localeCompare(b.email)
    },
    {
        key: 'operation',
        width: 50,
        render: () => (
            <Button type='link' href='/coach/client/xd'>
                Details
            </Button>
        )
    }
];

const dataSource: DataType[] = [
    { key: '1', firstName: 'John', lastName: 'Pork', email: 'example@example.com' },
    { key: '2', firstName: 'John', lastName: 'Pork', email: 'example@example.com' },
    { key: '3', firstName: 'John', lastName: 'Pork', email: 'example@example.com' },
    { key: '5', firstName: 'John', lastName: 'Pork', email: 'example@example.com' },
    { key: '6', firstName: 'John', lastName: 'Pork', email: 'example@example.com' },
    { key: '7', firstName: 'John', lastName: 'Pork', email: 'example@example.com' },
    { key: '8', firstName: 'John', lastName: 'Pork', email: 'example@example.com' },
    { key: '9', firstName: 'John', lastName: 'Pork', email: 'example@example.com' }
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
