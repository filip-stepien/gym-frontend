import { HallsTableCard, HallsTableHall } from '@/components/cards/HallsTableCard';
import { HallDto, listHalls } from '@/generated/gym-api';
import { getRoleFromUrl } from '@/utils/getRoleFromUrl';
import { i } from 'node_modules/react-router/dist/development/lib-B8x_tOvL.d.mts';
import { useEffect, useState } from 'react';

const role = getRoleFromUrl();

export function HallsPage() {
    return <HallsTableCard newHallHref={`/${role}/create-hall`} />;
}
