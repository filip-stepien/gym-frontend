import { UserContext, UserDetails } from '@/contexts/UserContext';
import { Dispatch, SetStateAction, useState, type JSX } from 'react';

const DEBUG_DEFAULT_USER_DETAILS: UserDetails = {
    firstName: 'John',
    lastName: 'Pork',
    role: 'client'
};

const USER_DETAILS_STORAGE_KEY = 'userDetails';

function readDetails(): UserDetails | null {
    const stored = localStorage.getItem(USER_DETAILS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
}

function saveDetails(details: UserDetails) {
    localStorage.setItem(USER_DETAILS_STORAGE_KEY, JSON.stringify(details));
}

export function UserProvider({ children }: { children: JSX.Element }) {
    const [userDetails, setUserDetails] = useState<UserDetails>(
        readDetails() ?? DEBUG_DEFAULT_USER_DETAILS
    );

    const handleDetailsSet: Dispatch<SetStateAction<UserDetails>> = details => {
        setUserDetails(prev => {
            const newDetails = typeof details === 'function' ? details(prev) : details;
            saveDetails(newDetails);
            return newDetails;
        });
    };

    return (
        <UserContext.Provider value={{ user: userDetails, setUserDetails: handleDetailsSet }}>
            {children}
        </UserContext.Provider>
    );
}
