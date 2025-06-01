import { CardTitle } from '@/components/common/CardTitle';
import { Card, Table, TableColumnsType, Tag, Badge, Flex } from 'antd';
import { Link } from 'react-router';
import { ActionButton } from '../common/ActionButton';

export type HallsTableHall = {
    hallNumber: string;
    hallType: string;
    hallStatus: string;
    detailsHref: string;
};

type HallsTableCardProps = {
    halls?: HallsTableHall[];
    newHallHref?: string;
};

type DataType = {
    key: React.Key;
} & HallsTableHall;

const columns: TableColumnsType<DataType> = [
    {
        title: 'Hall number',
        dataIndex: 'hallNumber',
        key: 'hallNumber',
        fixed: 'left',
        sorter: (a, b) => a.hallNumber.localeCompare(b.hallNumber)
    },
    {
        title: 'Hall type',
        dataIndex: 'hallType',
        key: 'hallType',
        fixed: 'left',
        sorter: (a, b) => a.hallType.localeCompare(b.hallType),
        render: (halltype: string) => <Tag>{halltype}</Tag>
    },
    {
        title: 'Status',
        dataIndex: 'hallStatus',
        key: 'hallStatus',
        sorter: (a, b) => a.hallStatus.localeCompare(b.hallStatus),
        render: (status: string) => {
            let badgeStatus: 'success' | 'warning' | 'error' | 'default';

            switch (status) {
                case 'Available':
                    badgeStatus = 'success';
                    break;
                case 'Under Maintance':
                    badgeStatus = 'warning';
                    break;
                case 'Busy':
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
        dataIndex: 'detailsHref',
        fixed: 'right',
        width: 100,
        render: (href: string) => <Link to={href}>Details</Link>
    }
];

export function HallsTableCard({ halls = [], newHallHref }: HallsTableCardProps) {
    return (
        <Card className='w-full'>
            <Flex vertical className='gap-layout'>
                <Flex justify='space-between'>
                    <CardTitle title='Training Halls' icon='training-halls' />
                    {newHallHref && (
                        <ActionButton primary href={newHallHref}>
                            + New
                        </ActionButton>
                    )}
                </Flex>
                <Table<DataType>
                    pagination={false}
                    columns={columns}
                    dataSource={halls.map((col, i) => ({ key: i, ...col }))}
                    scroll={{ x: 'max-content' }}
                />
            </Flex>
        </Card>
    );
}
