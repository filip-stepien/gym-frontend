import { UserContext, UserDetails } from '@/contexts/UserContext';
import { useState, type JSX } from 'react';

const DEBUG_DEFAULT_USER_DETAILS: UserDetails = {
    firstName: 'John',
    lastName: 'Pork',
    role: 'client'
};

export function UserProvider({ children }: { children: JSX.Element }) {
    const [userDetails, setUserDetails] = useState<UserDetails>(DEBUG_DEFAULT_USER_DETAILS);
    return (
        <UserContext.Provider value={{ user: userDetails, setUserDetails }}>
            {children}
        </UserContext.Provider>
    );
}
