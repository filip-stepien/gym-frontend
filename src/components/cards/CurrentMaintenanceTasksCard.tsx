import { Flex, Table, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Dayjs } from 'dayjs';
import { Link } from 'react-router';
import { CardTitle } from '../common/CardTitle';
import { Icon } from '../common/Icon';
import { Card } from '../layout/Card';

export type CurrentMaintenanceTaskHall = {
    hallNumber: string | number;
    description: string;
    detailsHref: string;
    duration: {
        startTime: Dayjs;
        endTime: Dayjs;
    };
};

type CurrentMaintenanceTasksCardProps = {
    halls?: CurrentMaintenanceTaskHall[];
};

const { Text } = Typography;

export function CurrentMaintenanceTasksCard({ halls = [] }: CurrentMaintenanceTasksCardProps) {
    const columns: ColumnsType = [
        {
            title: 'Hall Number',
            dataIndex: 'hallNumber',
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
            dataIndex: 'duration',
            key: 'duration',
            render: ({ startTime, endTime }: { startTime: Dayjs; endTime: Dayjs }) => (
                <Flex className='flex items-center gap-1'>
                    <Icon icon='clock' />
                    <span>
                        {startTime.format('HH:mm')} - {endTime.format('HH:mm')}
                    </span>
                </Flex>
            )
        },
        {
            title: 'Actions',
            key: 'actions',
            render: () => <Link to='/employee/training-halls/xd'>Details</Link>
        }
    ];

    return (
        <Card className='w-full'>
            <CardTitle title='Current Maintenance Tasks' icon='tool' />
            <Flex vertical className='gap-layout pt-middle'>
                <Table
                    scroll={{ x: 'max-content' }}
                    columns={columns}
                    dataSource={halls.map(hall => ({ key: hall.hallNumber, ...hall }))}
                    pagination={false}
                />
            </Flex>
        </Card>
    );
}
