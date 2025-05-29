import { useUser } from '@/hooks/useUser';
import { useEffect, useState, type JSX } from 'react';
import { Navigate, useLocation } from 'react-router';
import { rolesConfig } from '@/roles';
import { Loader } from '@/components/Loader';

type AuthGuardProps = {
    children: JSX.Element;
};

export function AuthGuard({ children }: AuthGuardProps) {
    const { user } = useUser();
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(user === undefined);
    }, [user]);

    if (import.meta.env.VITE_AUTH_ENABLED === 'false') {
        return children;
    }

    if (loading || !user) {
        return <Loader />;
    }

    const { routePrefix, defaultRoute } = rolesConfig[user?.role];
    const isPathAllowed = location.pathname.startsWith(routePrefix);

    if (!isPathAllowed) {
        return <Navigate to={routePrefix + defaultRoute} replace />;
    }

    return children;
}
