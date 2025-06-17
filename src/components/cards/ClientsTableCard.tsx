import { ActionButton } from '@/components/common/ActionButton';
import { CardTitle } from '@/components/common/CardTitle';
import { Card, Flex, Table, TableColumnsType, Badge } from 'antd';
import type { SorterResult } from 'antd/es/table/interface';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';

export type ClientsTableClient = {
    firstName: string;
    lastName: string;
    email: string;
    membershipStatus: boolean;
    detailsHref: string;
};

export type ClientsTableDataFetcher = (
    pageNumber: number,
    pageSize?: number,
    sortField?: string,
    sortOrder?: 'descend' | 'ascend'
) => Promise<{ data: ClientsTableClient[]; total: number } | undefined>;

export type ClientsTableCardProps = {
    newClientHref?: string;
    defaultPageSize?: number;
    dataFetcher: ClientsTableDataFetcher;
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
        sorter: true
    },
    {
        title: 'Last name',
        dataIndex: 'lastName',
        key: 'lastName',
        sorter: true
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        sorter: true
    },
    {
        title: 'Membership status',
        dataIndex: 'membershipStatus',
        key: 'status',
        sorter: true,
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

export function ClientsTableCard({
    defaultPageSize,
    newClientHref,
    dataFetcher
}: ClientsTableCardProps) {
    const [sorter, setSorter] = useState<{
        field: string | undefined;
        order: 'ascend' | 'descend' | undefined;
    }>();
    const [loading, setLoading] = useState(false);
    const [clients, setClients] = useState<ClientsTableClient[]>([]);
    const [pagination, setPagination] = useState<{ page: number; pageSize: number }>({
        page: 1,
        pageSize: defaultPageSize || 10
    });
    const [totalElements, setTotalElements] = useState<number>(0);

    useEffect(() => {
        setLoading(true);

        dataFetcher(pagination.page, pagination.pageSize, sorter?.field, sorter?.order)
            .then(data => {
                setClients(data?.data || []);
                setTotalElements(data?.total || 0);
            })
            .finally(() => setLoading(false));
    }, [dataFetcher, sorter, pagination]);

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
                    pagination={{
                        pageSizeOptions: [5, 10, 20, 50, 100],
                        defaultPageSize: defaultPageSize,
                        pageSize: pagination.pageSize,
                        current: pagination.page,
                        total: totalElements,
                        showSizeChanger: true
                    }}
                    loading={loading}
                    onChange={(pagination, _filter, sorter) => {
                        const newPagination = {
                            page: pagination.current || 1,
                            pageSize: pagination.pageSize || defaultPageSize || 10
                        };
                        setPagination(newPagination);

                        // Handle sorter type conversion
                        const singleSorter = sorter as SorterResult<DataType>;
                        setSorter({
                            field: singleSorter.field ? String(singleSorter.field) : undefined,
                            order:
                                singleSorter.order === 'ascend' || singleSorter.order === 'descend'
                                    ? singleSorter.order
                                    : undefined
                        });
                    }}
                    columns={columns}
                    dataSource={clients.map((client, index) => ({ key: index, ...client }))}
                    scroll={{ x: 'max-content' }}
                />
            </Flex>
        </Card>
    );
}
