import { UserContext, UserDetails } from '@/contexts/UserContext';
import { useEffect, useState, type JSX } from 'react';
import { rolesPriority, UserRole } from '@/roles';
import keycloak from '@/keycloak';
import { initializeAxios } from '@/axios';
import { whoAmI } from '@/generated/gym-api';
import dayjs from 'dayjs';

export function UserProvider({ children }: { children: JSX.Element }) {
    const [userDetails, setUserDetails] = useState<UserDetails>();

    const updateUser = (updates: Partial<UserDetails>) => {
        setUserDetails(prev => (prev ? { ...prev, ...updates } : prev));
    };

    useEffect(() => {
        async function initUser() {
            const initialized = await keycloak.init({ onLoad: 'login-required' });
            if (!initialized) return;

            initializeAxios(keycloak);

            const userProfile = await keycloak.loadUserProfile();
            const userRoles = keycloak.tokenParsed?.['roles'] as UserRole[];
            const significantRole = userRoles
                .sort((a: UserRole, b: UserRole) => rolesPriority[b] - rolesPriority[a])
                .at(0);

            const whoAmIData = await whoAmI()
                .then(data => data?.data)
                .catch(() => {
                    console.error('failed to fetch user data. Is backend API online ?');
                    return undefined;
                });

            const userDetails: UserDetails = {
                firstName: userProfile.firstName as string,
                lastName: userProfile.lastName as string,
                email: userProfile.email as string,
                role: significantRole ?? 'client',
                id: whoAmIData?.uuid,
                hasValidMembership: dayjs().isBefore(dayjs(whoAmIData?.membership?.validUntil))
            };

            setUserDetails(userDetails);
        }

        if (import.meta.env.VITE_AUTH_ENABLED === 'true') {
            initUser();
        }
    }, []);

    return (
        <UserContext.Provider value={{ user: userDetails, updateUser }}>
            {children}
        </UserContext.Provider>
    );
}
