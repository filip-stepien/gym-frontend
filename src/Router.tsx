import { BrowserRouter, Routes, Route } from 'react-router';

import { Debug } from './components/Debug';
import { AuthenticatedLayout } from './layouts/AuthenticatedLayout';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthenticatedLayout renderChat />}>
                    <Route path='dashboard' element={<Debug />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
