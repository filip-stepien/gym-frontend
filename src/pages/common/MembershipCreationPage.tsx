import {
    MembershipCreationCard,
    MembershipValues
} from '@/components/cards/MembershipCreationCard';
import { BackButton } from '@/components/layout/BackButton';

const membershipCreationCardData = {
    onCreate: (data: MembershipValues) => {
        // POST...
        console.log(data);
    }
};

export function MembershipCreationPage() {
    return (
        <div>
            <BackButton />
            <MembershipCreationCard {...membershipCreationCardData} />;
        </div>
    );
}
