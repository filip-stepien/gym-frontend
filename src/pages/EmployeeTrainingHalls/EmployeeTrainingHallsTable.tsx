import { CardTitle } from '@/components/CardTitle';
import { Card, Flex, Table, TableColumnsType, Tag, Badge } from 'antd';

interface DataType {
    key: React.Key;
    id: number;
    halltype: string;
    status: string;
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'Hall number',
        dataIndex: 'id',
        key: 'id',
        fixed: 'left',
        sorter: (a, b) => a.id - b.id
    },
    {
        title: 'Hall type',
        dataIndex: 'halltype',
        key: 'halltype',
        fixed: 'left',
        sorter: (a, b) => a.halltype.localeCompare(b.halltype),
        render: (halltype: string) => <Tag>{halltype}</Tag>
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        sorter: (a, b) => a.status.localeCompare(b.status),
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
        fixed: 'right',
        width: 100,
        render: () => <a>Details</a>
    }
];

const dataSource: DataType[] = [
    {
        key: '1',
        id: 123,
        halltype: 'Yoga',
        status: 'Available'
    },
    {
        key: '2',
        id: 123,
        halltype: 'Weight lifting',
        status: 'Under Maintance'
    },
    {
        key: '3',
        id: 123,
        halltype: 'Weight lifting',
        status: 'Busy'
    },
    {
        key: '4',
        id: 123,
        halltype: 'Cardio',
        status: 'Busy'
    }
];

export function EmployeeTrainingHallsTable() {
    return (
        <Card className='w-full'>
            <Flex justify='space-between'>
                <CardTitle title='Training Halls' icon='training-halls' />
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
