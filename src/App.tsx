import { Router } from './router';
import { Provider } from './Provider';
import { useEffect } from 'react';
import keycloak from './keycloak';
import { useLocation } from 'react-router';

export function App() {
    return (
        <Provider>
            <Router />
        </Provider>
    );
}
