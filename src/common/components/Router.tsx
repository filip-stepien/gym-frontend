import { BrowserRouter, Routes, Route } from 'react-router';

import Layout from './Layout';
import Debug from './Debug';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Debug />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
