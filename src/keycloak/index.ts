import Keycloak from 'keycloak-js';

const url = import.meta.env.VITE_KEYCLOAK_URL;
const realm = import.meta.env.VITE_KEYCLOAK_REALM;
const clientId = import.meta.env.VITE_KEYCLOAK_CLIENT_ID;

if (!url) {
    throw new Error('VITE_KEYCLOAK_URL is not set. Check your .env file.');
}

if (!realm) {
    throw new Error('VITE_KEYCLOAK_REALM is not set. Check your .env file.');
}

if (!clientId) {
    throw new Error('VITE_KEYCLOAK_CLIENT_ID is not set. Check your .env file.');
}

export default new Keycloak({ url, realm, clientId });
