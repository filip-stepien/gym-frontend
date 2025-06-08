import { ClientsTableCard } from '@/components/cards/ClientsTableCard';
import { listUsers, UserDto } from '@/generated/gym-api';
import { getRoleFromUrl } from '@/utils/getRoleFromUrl';
import { useState, useEffect } from 'react';

// debug: get role from url
// get role from useUser hook in prod instead
const role = getRoleFromUrl();

export function ClientsPage() {
    const [users, setUsers] = useState<UserDto[]>([]);

    useEffect(() => {
        async function getClients() {
            try {
                const response = await listUsers();
                console.log('Pełna odpowiedź API:', response.data);
                console.log('Czy to tablica?', Array.isArray(response.data));
                console.log('Liczba użytkowników:', response.data?.length);
                console.log('Rola użytkownika:', role);

                const rawClients = Array.isArray(response.data) ? response.data : [];

                setUsers(rawClients);
                console.log('Użytkownicy zapisani w stanie:', rawClients);
            } catch (error) {
                console.error('Error fetching clients:', error);
                setUsers([]);
            }
        }

        getClients();
    }, [role]);

    const clientsTableCardData = {
        users,
        newClientHref: ['employee', 'manager'].includes(role)
            ? `/${role}/create-membership`
            : undefined
    };

    return <ClientsTableCard {...clientsTableCardData} />;
}
