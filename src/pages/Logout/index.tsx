import keycloak from '@/keycloak';
import { Button, Flex } from 'antd';
import React from 'react';

export function Logout() {
    const onClick = () => {
        keycloak.accountManagement();
    };

    return (
        <Flex>
            <Button onClick={onClick}>account</Button>
        </Flex>
    );
}
