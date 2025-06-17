import { ClientsTableCardWithData } from '@/components/cards/with-data/ClientsTableCardWithData';
import { getRoleFromUrl } from '@/utils/getRoleFromUrl';

// debug: get role from url
// get role from useUser hook in prod instead
const role = getRoleFromUrl();

export function ClientsPage() {
    // const [users, setUsers] = useState<UserDto[]>([]);

    // useEffect(() => {
    //     async function getClients() {
    //         try {
    //             const response = await listUsers();
    //             console.log('Odpowiedź API:', response.data); // Debug: sprawdź strukturę odpowiedzi
    //             const rawClients = response.data?.content ?? [];

    //             const transformedClients: UserDto[] = rawClients.map((user: UserDto) => ({
    //                 firstName: user.firstName ?? 'Unknown',
    //                 lastName: user.lastName ?? 'Unknown',
    //                 membershipStatus: 'Active',
    //                 email: user.email ?? 'No email',
    //                 detailsHref: `/${role}/details/${user.uuid ?? ''}`
    //             }));

    //             setUsers(transformedClients);
    //         } catch (error) {
    //             console.error('Błąd podczas pobierania użytkowników:', error);
    //             setUsers([]);
    //         }
    //     }

    //     getClients();
    // }, [role]);

    const clientsTableCardData = {
        newClientHref: ['employee', 'manager'].includes(role)
            ? `/${role}/create-membership`
            : undefined
    };

    return <ClientsTableCardWithData {...clientsTableCardData} />;
}
