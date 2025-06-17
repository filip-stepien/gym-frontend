import { UserRole } from '@/roles';
import { createContext } from 'react';

export type UserDetails = {
    firstName: string;
    lastName: string;
    email: string;
    role: UserRole;
    /**
     * id undefined is used as value indicating that there is no user logged in or
     * failed to fetch it from backend api
     */
    id?: string;
    /**
     * Does user (@see id) have active membership?
     * undefined indicates that failure fetching data from backend api
     */
    hasValidMembership?: boolean;
};

export type UserContextContent = {
    user?: UserDetails;
    updateUser: (updates: Partial<UserDetails>) => void;
};

export const UserContext = createContext<UserContextContent>({
    updateUser: () => {
        throw new Error('Not implemented.');
    }
});
