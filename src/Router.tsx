import { BrowserRouter, Routes, Route } from 'react-router';

import { AuthenticatedLayout } from './layouts/AuthenticatedLayout';
import { ClientDashboard } from './pages/ClientDashboard';
import { ClientProgress } from './pages/ClientProgress';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthenticatedLayout renderChat />}>
                    <Route path='dashboard' element={<ClientDashboard />} />
                    <Route path='progress' element={<ClientProgress />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
