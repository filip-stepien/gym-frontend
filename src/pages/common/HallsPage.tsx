import { HallsTableCardWithData } from '@/components/cards/with-data/HallsTableCardWithData';
import { getRoleFromUrl } from '@/utils/getRoleFromUrl';

const role = getRoleFromUrl();

export function HallsPage() {
    return <HallsTableCardWithData newHallHref={`/${role}/create-hall`} />;
}
