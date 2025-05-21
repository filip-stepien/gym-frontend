import { CardTitle } from '@/components/CardTitle';
import { Button, Card, Flex, Table, TableColumnsType, Badge } from 'antd';

interface DataType {
    key: React.Key;
    id: number;
    firstname: string;
    lastname: string;
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
        title: 'Membership status',
        dataIndex: 'status',
        key: 'status',
        sorter: (a, b) => a.status.localeCompare(b.status),
        render: (status: string) => {
            let badgeStatus: 'success' | 'error' | 'default';

            switch (status) {
                case 'Active':
                    badgeStatus = 'success';
                    break;
                case 'Expired':
                    badgeStatus = 'error';
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
        render: () => <a>Details</a>
    }
];

const dataSource: DataType[] = [
    { key: '1', id: 1, firstname: 'Bob', lastname: 'Pork', status: 'Active' },
    { key: '2', id: 123, firstname: 'Aron', lastname: 'Pork', status: 'Active' },
    { key: '3', id: 3, firstname: 'John', lastname: 'Pork', status: 'Active' },
    { key: '4', id: 123, firstname: 'John', lastname: 'Pork', status: 'Expired' },
    { key: '5', id: 2, firstname: 'John', lastname: 'Pork', status: 'Active' },
    { key: '6', id: 123, firstname: 'John', lastname: 'Pork', status: 'Expired' },
    { key: '7', id: 123, firstname: 'John', lastname: 'Ant', status: 'Active' },
    { key: '8', id: 123, firstname: 'John', lastname: 'Design', status: 'Expired' },
    { key: '9', id: 123, firstname: 'John', lastname: 'Pork', status: 'Expired' }
];

export function EmployeeClientsTable() {
    return (
        <Card className='w-full'>
            <Flex vertical className='gap-layout'>
                <Flex justify='space-between'>
                    <CardTitle title='Clients' icon='clients' />

                    <Button
                        type='primary'
                        className='primary'
                        href='/employee/clients/clientcreation'
                    >
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
