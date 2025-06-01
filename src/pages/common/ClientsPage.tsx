import { ClientsTableCard } from '../../components/cards/ClientsTableCard';

const clientsTableCardData = {
    newClientHref: '/employee/create-membership',
    clients: [
        {
            firstName: 'Bob',
            lastName: 'Pork',
            membershipStatus: 'Active',
            email: 'john@pork.com',
            detailsHref: '/employee/clients/1'
        },
        {
            firstName: 'Aron',
            lastName: 'Pork',
            membershipStatus: 'Active',
            email: 'john@pork.com',
            detailsHref: '/employee/clients/1'
        },
        {
            firstName: 'John',
            lastName: 'Pork',
            membershipStatus: 'Active',
            email: 'john@pork.com',
            detailsHref: '/employee/clients/1'
        },
        {
            firstName: 'John',
            lastName: 'Pork',
            membershipStatus: 'Expired',
            email: 'john@pork.com',
            detailsHref: '/employee/clients/1'
        },
        {
            firstName: 'John',
            lastName: 'Pork',
            membershipStatus: 'Active',
            email: 'john@pork.com',
            detailsHref: '/employee/clients/1'
        },
        {
            firstName: 'John',
            lastName: 'Pork',
            membershipStatus: 'Expired',
            email: 'john@pork.com',
            detailsHref: '/employee/clients/1'
        },
        {
            firstName: 'John',
            lastName: 'Ant',
            membershipStatus: 'Active',
            email: 'john@pork.com',
            detailsHref: '/employee/clients/1'
        },
        {
            firstName: 'John',
            lastName: 'Design',
            membershipStatus: 'Expired',
            email: 'john@pork.com',
            detailsHref: '/employee/clients/1'
        },
        {
            firstName: 'John',
            lastName: 'Pork',
            membershipStatus: 'Expired',
            email: 'john@pork.com',
            detailsHref: '/employee/clients/1'
        }
    ]
};

export function ClientsPage() {
    return <ClientsTableCard {...clientsTableCardData} />;
}
