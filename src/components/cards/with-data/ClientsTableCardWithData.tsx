import { listUsers } from '@/generated/gym-api';
import { ClientsTableCard, ClientsTableClient, ClientsTableDataFetcher } from '../ClientsTableCard';

export type ClientsTableCardWithDataProps = {
    newClientHref?: string;
    defaultPageSize?: number;
};

export function ClientsTableCardWithData(props: ClientsTableCardWithDataProps) {
    const dataFetcher: ClientsTableDataFetcher = async (
        pageNumber,
        pageSize,
        sortField,
        sortOrder
    ) => {
        const response = await listUsers({
            page: pageNumber - 1,
            size: pageSize,
            sort: `${sortField ?? ''},${sortOrder === 'descend' ? 'desc' : 'asc'}` as unknown as string[]
        });

        const rawUsers = response.data.content;
        const totalElements = response?.data?.totalElements;

        if (!rawUsers || !totalElements) {
            return undefined;
        }

        const transformedClients: ClientsTableClient[] = rawUsers.map(user => {
            return {
                firstName: user?.firstName ?? '',
                lastName: user?.lastName ?? '',
                email: user?.email ?? '',
                membershipStatus: user.membership?.valid ?? false,
                detailsHref: `details/${user.uuid}`
            };
        });

        return { data: transformedClients, total: totalElements };
    };

    return <ClientsTableCard {...props} dataFetcher={dataFetcher} />;
}
