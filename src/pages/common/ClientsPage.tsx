import { ClientsTableCard } from '@/components/cards/ClientsTableCard';
import { getRoleFromUrl } from '@/utils/getRoleFromUrl';

// debug: get role from url
// get role from useUser hook in prod instead
const role = getRoleFromUrl();

const clientsTableCardData = {
    // only employee and manager should be able to add the client
    newClientHref: ['employee', 'manager'].includes(role)
        ? `/${role}/create-membership`
        : undefined,
    clients: [
        {
            firstName: 'Bob',
            lastName: 'Pork',
            membershipStatus: 'Active',
            email: 'john@pork.com',
            detailsHref: `/${role}/clients/1`
        },
        {
            firstName: 'Aron',
            lastName: 'Pork',
            membershipStatus: 'Expired',
            email: 'john@pork.com',
            detailsHref: `/${role}/clients/1`
        },
        {
            firstName: 'John',
            lastName: 'Pork',
            membershipStatus: 'Active',
            email: 'john@pork.com',
            detailsHref: `/${role}/clients/1`
        }
    ]
};
export function ClientsPage() {
    return <ClientsTableCard {...clientsTableCardData} />;
}
