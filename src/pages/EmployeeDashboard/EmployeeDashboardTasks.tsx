import { Card, Flex, Space } from 'antd';
import { CardTitle } from '@/components/CardTitle';
import { Table, Button, Typography } from 'antd';
import { Icon } from '@/components/Icon';

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
    const columns = [
        {
            title: 'Hall Number',
            dataIndex: 'hall',
            key: 'hall'
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
                    <Link>Details</Link>
                    <Text type='danger' className='cursor-pointer'>
                        Cancel
                    </Text>
                </Flex>
            )
        }
    ];

    return (
        <Card className='w-full'>
            <CardTitle title='Current Maintenance Tasks' icon='tool' />
            <Flex vertical className='gap-layout'>
                <Table columns={columns} dataSource={data} pagination={false} />
                <Space className='justify-end'>
                    <Button type='primary'>+ Begin Maintenance</Button>
                    <Button>Show All</Button>
                </Space>
            </Flex>
        </Card>
    );
}
