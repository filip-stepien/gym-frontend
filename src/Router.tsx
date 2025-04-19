import { BrowserRouter, Routes, Route } from 'react-router';

import { AuthenticatedLayout } from './layouts/AuthenticatedLayout';
import { ClientDashboard } from './pages/ClientDashboard';
import { ClientProgress } from './pages/ClientProgress';
import { ClientSession } from './pages/ClientSession';
import { ClientMembership } from './pages/ClientMembership/ClientMembership';
import { ClientWorkout } from './pages/ClientWorkout';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthenticatedLayout renderChat />}>
                    <Route path='dashboard' element={<ClientDashboard />} />
                    <Route path='progress' element={<ClientProgress />} />
                    <Route path='sessions' element={<ClientSession />} />
                    <Route path='membership' element={<ClientMembership />} />
                    <Route path='workout' element={<ClientWorkout />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
