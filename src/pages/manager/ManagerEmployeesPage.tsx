import { EmployeesTableCard } from '@/components/cards/EmployeesTableCard';
import { UserDto, listUsers } from '@/generated/gym-api';
import { useState, useEffect } from 'react';
import { getRoleFromUrl } from '@/utils/getRoleFromUrl';

const role = getRoleFromUrl();

export function ManagerEmployeesPage() {
    const [users, setUsers] = useState<UserDto[]>([]);

    useEffect(() => {
        async function getClients() {
            try {
                const response = await listUsers();
                const rawClients = response.data?.content ?? [];

                const transformedClients: UserDto[] = rawClients.map((user: UserDto) => ({
                    firstName: user.firstName ?? 'Unknown',
                    lastName: user.lastName ?? 'Unknown',
                    position: user.roles ?? 'Unknown',
                    detailsHref: `/${role}/details/${user.uuid ?? ''}`
                }));

                setUsers(transformedClients);
            } catch (error) {
                console.error('Błąd podczas pobierania użytkowników:', error);
                setUsers([]);
            }
        }

        getClients();
    }, [role]);

    const employeesTableCardData = {
        employees: users,
        newEmployeeHref: ['manager'].includes(role) ? `/${role}/create-employee` : undefined
    };

    return <EmployeesTableCard {...employeesTableCardData} />;
}
