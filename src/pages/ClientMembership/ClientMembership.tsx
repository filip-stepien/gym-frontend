import { Page } from '@/components/Page';
import { MembershipOverview } from './MembershipOverwiev';

export function ClientMembership() {
    return (
        <Page>
            <MembershipOverview
                firstName='John'
                lastName='Pork'
                dateOfBirth='21.02.2002'
                email='email@email.com'
                imageSrc='https://picsum.photos/200/300'
            />
        </Page>
    );
}
