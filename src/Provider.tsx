import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider, theme } from 'antd';
import { JSX } from 'react';

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
            <StyleProvider layer>{props.children}</StyleProvider>
        </ConfigProvider>
    );
}
