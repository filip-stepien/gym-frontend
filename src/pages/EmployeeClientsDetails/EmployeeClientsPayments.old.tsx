import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { Badge, Button, Table, TableColumnsType } from 'antd';

interface DataType {
    key: React.Key;
    id: number;
    firstName: string;
    lastName: string;
    status: string;
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'Membership ID',
        dataIndex: 'id',
        key: 'id',
        fixed: 'left',
        sorter: (a, b) => a.id - b.id
    },
    {
        title: 'First name',
        dataIndex: 'firstName',
        key: 'firstName',
        fixed: 'left',
        sorter: (a, b) => a.firstName.localeCompare(b.firstName)
    },
    {
        title: 'Last name',
        dataIndex: 'lastName',
        key: 'lastName',
        sorter: (a, b) => a.lastName.localeCompare(b.lastName)
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        sorter: (a, b) => a.status.localeCompare(b.status),
        render: (status: string) => {
            let badgeStatus: 'success' | 'processing' | 'default';

            switch (status) {
                case 'Success ':
                    badgeStatus = 'success';
                    break;
                case 'Pending':
                    badgeStatus = 'processing';
                    break;
                default:
                    badgeStatus = 'default';
            }

            return <Badge status={badgeStatus} text={status} />;
        }
    },
    {
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <Button type='link'>Details</Button>
    }
];

const dataSource: DataType[] = [
    { key: '1', id: 123, firstName: 'John', lastName: 'Pork', status: 'Pending' },
    { key: '2', id: 123, firstName: 'John', lastName: 'Pork', status: 'Success ' },
    { key: '3', id: 123, firstName: 'John', lastName: 'Pork', status: 'Pending' }
];

export function EmployeeClientsPayments() {
    return (
        <Card>
            <CardTitle title='Payments' icon='creditcard' />
            <Table<DataType>
                columns={columns}
                dataSource={dataSource}
                scroll={{ x: 'max-content' }}
            />
        </Card>
    );
}
