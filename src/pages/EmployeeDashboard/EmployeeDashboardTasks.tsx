import { Card, Flex } from 'antd';
import { CardTitle } from '@/components/CardTitle';
import { Table, Typography } from 'antd';
import { Icon } from '@/components/Icon';
import { ColumnsType } from 'antd/es/table';

const { Text, Link } = Typography;

const data = [
    {
        key: '1',
        hall: '1',
        description: 'Annual maintenance.',
        time: '12:00 - 13:00'
    },
    {
        key: '2',
        hall: '2',
        description:
            'Work includes floor renovations and equipment checks. Reservations are temporarily unavailable.',
        time: '13:00 - 14:00'
    }
];

export function EmployeeDashboardTasks() {
    const columns: ColumnsType = [
        {
            title: 'Hall Number',
            dataIndex: 'hall',
            key: 'hall',
            fixed: 'left'
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            render: (text: string) => <Text>{text}</Text>
        },
        {
            title: 'Expected Duration',
            dataIndex: 'time',
            key: 'time',
            render: (text: string) => (
                <Flex className='flex items-center gap-1'>
                    <Icon icon='clock' />
                    <span>{text}</span>
                </Flex>
            )
        },
        {
            title: 'Actions',
            key: 'actions',
            render: () => (
                <Flex className='flex gap-4'>
                    <Link href='/employee/training-halls/xd'>Details</Link>
                </Flex>
            )
        }
    ];

    return (
        <Card className='w-full'>
            <CardTitle title='Current Maintenance Tasks' icon='tool' />
            <Flex vertical className='gap-layout pt-middle'>
                <Table
                    scroll={{ x: 'max-content' }}
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                />
            </Flex>
        </Card>
    );
}
