import { ActionButton } from '@/components/common/ActionButton';
import { CardTitle } from '@/components/common/CardTitle';
import { Card, Flex, Table, TableColumnsType, Badge } from 'antd';
import { Link } from 'react-router';

type ClientsTableClient = {
    firstName: string;
    lastName: string;
    email: string;
    membershipStatus: string;
    detailsHref: string;
};

type ClientsTableCardProps = {
    clients?: ClientsTableClient[];
    newClientHref?: string;
};

type DataType = {
    key: React.Key;
} & ClientsTableClient;

const columns: TableColumnsType<DataType> = [
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
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        sorter: (a, b) => a.email.localeCompare(b.email)
    },
    {
        title: 'Membership status',
        dataIndex: 'membershipStatus',
        key: 'status',
        sorter: (a, b) => a.membershipStatus.localeCompare(b.membershipStatus),
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
        key: 'details',
        dataIndex: 'detailsHref',
        fixed: 'right',
        width: 100,
        render: (href: string) => <Link to={href}>Details</Link>
    }
];

export function ClientsTableCard({ clients = [], newClientHref }: ClientsTableCardProps) {
    return (
        <Card className='w-full'>
            <Flex vertical className='gap-layout'>
                <Flex justify='space-between'>
                    <CardTitle title='Clients' icon='clients' />
                    {newClientHref && (
                        <ActionButton primary href={newClientHref}>
                            + New
                        </ActionButton>
                    )}
                </Flex>
                <Table<DataType>
                    pagination={false}
                    columns={columns}
                    dataSource={clients.map((col, i) => ({ key: i, ...col }))}
                    scroll={{ x: 'max-content' }}
                />
            </Flex>
        </Card>
    );
}
