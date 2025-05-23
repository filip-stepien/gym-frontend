import { useUser } from '@/hooks/useUser';
import { Navigate, useLocation } from 'react-router';
import rolesConfig from '@/roles';
import { type JSX } from 'react';

export function AuthGuard({ children }: { children: JSX.Element }) {
    const { user } = useUser();
    const location = useLocation();

    if (!user) {
        // TODO: redirect to login page
        return children;
    }

    const { routePrefix, defaultRoute } = rolesConfig[user.role];
    const isPathAllowed = location.pathname.startsWith(routePrefix);

    if (!isPathAllowed) {
        return <Navigate to={routePrefix + defaultRoute} replace />;
    }

    return children;
}
