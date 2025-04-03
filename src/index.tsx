import '@ant-design/v5-patch-for-react-19';
import 'material-symbols/outlined.css';

import { StyleProvider } from '@ant-design/cssinjs';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ConfigProvider, theme } from 'antd';

import Debug from './common/components/Debug';
import Layout from './common/components/Layout';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
            <StyleProvider layer>
                <BrowserRouter>
                    <Routes>
                        <Route element={<Layout />}>
                            <Route path='/' element={<Debug />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </StyleProvider>
        </ConfigProvider>
    </StrictMode>
);
