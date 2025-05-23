import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider, theme } from 'antd';
import { JSX } from 'react';
import { ChatProvider } from './providers/ChatProvider';
import { UserProvider } from './providers/UserProvider';

type ProviderProps = {
    children: JSX.Element | JSX.Element[];
};

export function Provider(props: ProviderProps) {
    return (
        <ConfigProvider
            theme={{
                algorithm: theme.defaultAlgorithm,
                token: {
                    borderRadius: 0,
                    colorBorder: 'rgba(0, 0, 0, 0.06)'
                },
                components: {
                    Tabs: {
                        horizontalMargin: '0'
                    }
                }
            }}
        >
            <UserProvider>
                <ChatProvider>
                    <StyleProvider layer>{props.children}</StyleProvider>
                </ChatProvider>
            </UserProvider>
        </ConfigProvider>
    );
}
