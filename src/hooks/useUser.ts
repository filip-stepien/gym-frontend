import { UserContext } from '@/contexts/UserContext';
import { useContext } from 'react';

export function useUser() {
    return useContext(UserContext);
}
