import axios from 'axios';
import Keycloak from 'keycloak-js';

export function initializeAxios(
    keycloak: Keycloak,
    baseUrl: string = import.meta.env.VITE_BASE_URL
) {
    axios.defaults.baseURL = baseUrl;
    axios.interceptors.request.use(async config => {
        if (keycloak.isTokenExpired()) {
            await keycloak.updateToken();
        }

        config.headers = config.headers || {};
        config.headers['Authorization'] = 'Bearer ' + keycloak.token;
        return config;
    });
}
