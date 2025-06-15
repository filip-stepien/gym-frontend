import { HallDto, listHalls } from '@/generated/gym-api';
import { HallsTableCard, HallsTableHall } from '../HallsTableCard';

export type HallsTableCardWithDataPrps = {
    newHallHref?: string;
    defaultPageSize?: number;
};

export function HallsTableCardWithData(props: HallsTableCardWithDataPrps) {
    const getData = async (
        pageNumber: number,
        pageSize?: number,
        sortField?: string,
        sortOrder?: 'descend' | 'ascend'
    ): Promise<{ data: HallsTableHall[]; total: number } | undefined> => {
        try {
            const response = await listHalls({
                // api counts from 0 , frontend from 1
                page: pageNumber - 1,
                size: pageSize,
                // bug workaround
                sort: `${sortField ?? ''},${sortOrder === 'descend' ? 'desc' : 'asc'}` as unknown as string[]
            });
            const rawHalls = response?.data?.content;
            const totalElements = response?.data?.totalElements;

            if (!rawHalls || !totalElements) {
                return undefined;
            }
            // console.log(rawHalls);

            const transformedHalls: HallsTableHall[] = rawHalls.map((hall: HallDto) => ({
                ...hall,
                hallNumber: hall.hallName ?? 'None',
                hallType: hall.hallType?.name ?? 'None',
                hallStatus: 'Available',
                detailsHref: `details/${hall.uuid ?? ''}`
            }));

            return {
                data: transformedHalls,
                total: totalElements
            };
        } catch (error) {
            console.error('Błąd podczas pobierania hal:', error);
            return undefined;
        }
    };

    return <HallsTableCard {...props} dataFetcher={getData} />;
}
