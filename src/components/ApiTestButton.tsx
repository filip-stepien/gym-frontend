import { Button } from 'antd';
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'http://localhost:8081',
    realm: 'gym',
    clientId: 'gym-app'
});

try {
    const authenticated = await keycloak.init();
    if (authenticated) {
        console.log('User is authenticated');
    } else {
        console.log('User is not authenticated');
    }
} catch (error) {
    console.error('Failed to initialize adapter:', error);
}

function ApiTestButton() {
    const onClick = async () => {
        console.log('api call test');
        keycloak.login();
    };

    return (
        <Button className='bg-card p-small px-middle shadow-card cursor-pointer' onClick={onClick}>
            ApiTestButton
        </Button>
    );
}

export default ApiTestButton;
