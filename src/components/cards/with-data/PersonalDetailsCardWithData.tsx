import { useUser } from '@/hooks/useUser';
import { PersonalDetailsCard } from '../PersonalDetailsCard';

export function PersonalDetailsCardWithData() {
    const { user } = useUser();
    return (
        <PersonalDetailsCard
            firstName={user?.firstName}
            lastName={user?.lastName}
            email={user?.email}
        />
    );
}
