import { BrowserRouter, Routes, Route } from 'react-router';

import Debug from './components/Debug';
import Layout from './components/Layout';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='dashboard' element={<Debug />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
