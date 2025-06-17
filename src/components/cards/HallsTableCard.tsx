import { CardTitle } from '@/components/common/CardTitle';
import { Card, Table, TableColumnsType, Tag, Badge, Flex } from 'antd';
import { Link } from 'react-router';
import { ActionButton } from '../common/ActionButton';
import { useEffect, useState } from 'react';

export type HallsTableHall = {
    hallName: string;
    hallType: string;
    hallStatus: string;
    detailsHref: string;
};

export type HallsTableCardProps = {
    // halls?: HallsTableHall[];
    newHallHref?: string;
    defaultPageSize?: number;
    dataFetcher: (
        pageNumber: number,
        pageSize?: number,
        sortField?: string,
        sortOrder?: 'descend' | 'ascend'
    ) => Promise<{ data: HallsTableHall[]; total: number } | undefined>;
};

type DataType = {
    key: React.Key;
} & HallsTableHall;

const columns: TableColumnsType<DataType> = [
    {
        title: 'Hall number',
        dataIndex: 'hallName',
        key: 'hallNumber',
        fixed: 'left',
        sorter: true
    },
    {
        title: 'Hall type',
        dataIndex: 'hallType',
        key: 'hallType',
        fixed: 'left',
        sorter: true,
        render: (halltype: string) => <Tag>{halltype}</Tag>
    },
    {
        title: 'Status',
        dataIndex: 'hallStatus',
        key: 'hallStatus',
        sorter: false,
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

export function HallsTableCard({ defaultPageSize, newHallHref, dataFetcher }: HallsTableCardProps) {
    const [sorter, setSorter] = useState<{
        field: string | undefined;
        order: 'ascend' | 'descend' | undefined;
    }>();
    const [loading, setLoading] = useState(false);
    const [halls, setHalls] = useState<HallsTableHall[] | undefined>([]);
    const [pagination, setPagination] = useState<{ page: number; pageSize: number } | undefined>();
    const [totalElements, setTotalElements] = useState<number | undefined>(undefined);

    useEffect(() => {
        // console.log(sorter, pagination);
        setLoading(true);

        dataFetcher(
            pagination?.page ?? 1,
            pagination?.pageSize,
            sorter?.field ?? '',
            sorter?.order ?? 'ascend'
        )
            .then(data => {
                setHalls(data?.data);
                setTotalElements(data?.total);
            })
            .finally(() => setLoading(false));
    }, [dataFetcher, sorter, pagination]);

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
                    pagination={{
                        pageSizeOptions: [2, 5, 10, 20, 50, 100],
                        defaultPageSize: defaultPageSize,
                        pageSize: pagination?.pageSize,
                        total: totalElements,
                        showSizeChanger: true
                    }}
                    loading={loading}
                    onChange={(pagination, _filter, newSorter) => {
                        if (pagination.current && pagination.pageSize) {
                            setPagination({
                                page: pagination.current,
                                pageSize: pagination.pageSize
                            });
                        } else {
                            console.warn('something went wrong');
                        }
                        const singleSorter = Array.isArray(newSorter) ? newSorter[0] : newSorter;
                        setSorter({
                            field: singleSorter.field?.toString() ?? undefined,
                            order: singleSorter.order ?? undefined
                        });
                    }}
                    columns={columns}
                    dataSource={halls?.map((col, i) => ({ key: i, ...col }))}
                    scroll={{ x: 'max-content' }}
                />
            </Flex>
        </Card>
    );
}
