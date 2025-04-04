import { BrowserRouter, Routes, Route } from 'react-router';

import Debug from './Debug';
import Layout from './Layout';

export default function Router() {
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
