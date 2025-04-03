import '@ant-design/v5-patch-for-react-19';
import { StyleProvider } from '@ant-design/cssinjs';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ConfigProvider, theme } from 'antd';

import Debug from './common/components/Debug';
import ChatLayout from './common/layouts/ChatLayout';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
            <StyleProvider layer>
                <BrowserRouter>
                    <Routes>
                        <Route element={<ChatLayout />}>
                            <Route path='/' element={<Debug />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </StyleProvider>
        </ConfigProvider>
    </StrictMode>
);
