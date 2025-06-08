import { UserRole } from '@/roles';
import { createContext } from 'react';

export type UserDetails = {
    firstName: string;
    lastName: string;
    email: string;
    role: UserRole;
    id?: string;
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
