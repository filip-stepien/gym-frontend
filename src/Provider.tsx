import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider, theme } from 'antd';
import { JSX } from 'react';

type ProviderProps = {
    children: JSX.Element | JSX.Element[];
};

export function Provider(props: ProviderProps) {
    return (
        <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
            <StyleProvider layer>{props.children}</StyleProvider>
        </ConfigProvider>
    );
}
