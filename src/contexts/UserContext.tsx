import { UserRole } from '@/roles';
import { createContext, Dispatch, SetStateAction } from 'react';

export type UserDetails = {
    firstName: string;
    lastName: string;
    role: UserRole;
};

export type UserContextContent = {
    user?: UserDetails;
    setUserDetails: Dispatch<SetStateAction<UserDetails>>;
};

export const UserContext = createContext<UserContextContent>({
    setUserDetails: () => {
        throw new Error('Not implemented.');
    }
});
