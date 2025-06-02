import { ActionButton } from '@/components/common/ActionButton';
import { CardTitle } from '@/components/common/CardTitle';
import { Tag, Card, Flex, Table, TableColumnsType } from 'antd';
import { Link } from 'react-router';

export type EmployeesTableEmployee = {
    firstName: string;
    lastName: string;
    position: string;
    detailsHref: string;
};

type EmployeesTableCardProps = {
    employees?: EmployeesTableEmployee[];
    newEmployeeHref?: string;
};

type DataType = EmployeesTableEmployee & {
    key: React.Key;
};

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
        title: 'Position',
        dataIndex: 'position',
        key: 'position',
        sorter: (a, b) => a.position.localeCompare(b.position),
        render: (position: string) => <Tag>{position}</Tag>
    },

    {
        key: 'detailsHref',
        dataIndex: 'detailsHref',
        fixed: 'right',
        width: 100,
        render: (href: string) => <Link to={href}>Details</Link>
    }
];

export function EmployeesTableCard({ employees = [], newEmployeeHref }: EmployeesTableCardProps) {
    return (
        <Card className='w-full'>
            <Flex vertical className='gap-layout'>
                <Flex justify='space-between'>
                    <CardTitle title='Employees' icon='employees' />
                    {newEmployeeHref && (
                        <ActionButton primary href={newEmployeeHref}>
                            + New
                        </ActionButton>
                    )}
                </Flex>
                <Table<DataType>
                    pagination={false}
                    columns={columns}
                    dataSource={employees.map((e, i) => ({ key: i, ...e }))}
                    scroll={{ x: 'max-content' }}
                />
            </Flex>
        </Card>
    );
}
