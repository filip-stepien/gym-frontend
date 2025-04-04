import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider, theme } from 'antd';

import Router from './common/components/Router';

export default function App() {
    return (
        <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
            <StyleProvider layer>
                <Router />
            </StyleProvider>
        </ConfigProvider>
    );
}
