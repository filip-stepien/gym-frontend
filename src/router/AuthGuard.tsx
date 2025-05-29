// import { useUser } from '@/hooks/useUser';
// import { Navigate, useLocation } from 'react-router';
// import rolesConfig from '@/roles';
import keycloak from '@/keycloak';
import { useEffect, type JSX } from 'react';
import { useLocation } from 'react-router';

export function AuthGuard({ children }: { children: JSX.Element }) {
    const location = useLocation();

    useEffect(() => {
        if (!keycloak.didInitialize) {
            keycloak.onReady = authenticated => {
                const isOnLogoutPath = location.pathname === '/logout';

                if (!isOnLogoutPath && !authenticated) {
                    keycloak.login();
                }
            };
            keycloak.init();
        }

        console.log(location.pathname, keycloak.authenticated);
    }, [location]);
    // const { user } = useUser();
    // const location = useLocation();

    // if (!user) {
    //     // TODO: redirect to login page
    //     return children;
    // }

    // const { routePrefix, defaultRoute } = rolesConfig[user.role];
    // const isPathAllowed = location.pathname.startsWith(routePrefix);

    // if (!isPathAllowed) {
    //     return <Navigate to={routePrefix + defaultRoute} replace />;
    // }

    return children;
}
