import { Button } from 'antd';

import keycloak from '@/keycloak';

function ApiTestButton() {
    const onClick = async () => {
        const userProfile = await keycloak.loadUserProfile();
        console.log(userProfile?.firstName, userProfile?.lastName, userProfile?.email);
        console.log(keycloak.tokenParsed?.['roles']);
    };

    return (
        <Button className='bg-card p-small px-middle shadow-card cursor-pointer' onClick={onClick}>
            ApiTestButton
        </Button>
    );
}

export default ApiTestButton;
