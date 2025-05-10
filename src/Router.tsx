import { BrowserRouter, Routes, Route } from 'react-router';

import { AuthenticatedLayout } from './layouts/AuthenticatedLayout';
import { ClientDashboard } from './pages/ClientDashboard';
import { ClientProgress } from './pages/ClientProgress';
import { ClientSession } from './pages/ClientSession';
import { ClientMembership } from './pages/ClientMembership/ClientMembership';
import { ClientWorkout } from './pages/ClientWorkout';
import { EmployeeLayout } from './layouts/EmployeeLayout';
import { EmployeeDashboard } from './pages/EmployeeDashboard';
import { EmployeeClients } from './pages/EmployeeClients';
import { EmployeeRequests } from './pages/EmployeeRequests';
import { EmployeeTrainingHalls } from './pages/EmployeeTrainingHalls';
import { EmployeeNotifications } from './pages/EmployeeNotifications';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/client' element={<AuthenticatedLayout renderChat />}>
                    <Route path='dashboard' element={<ClientDashboard />} />
                    <Route path='progress' element={<ClientProgress />} />
                    <Route path='sessions' element={<ClientSession />} />
                    <Route path='membership' element={<ClientMembership />} />
                    <Route path='workout' element={<ClientWorkout />} />
                </Route>

                <Route path='/employee' element={<EmployeeLayout renderChat />}>
                    <Route path='dashboard' element={<EmployeeDashboard />} />
                    <Route path='clients' element={<EmployeeClients />} />
                    <Route path='requests' element={<EmployeeRequests />} />
                    <Route path='traininghalls' element={<EmployeeTrainingHalls />} />
                    <Route path='notifications' element={<EmployeeNotifications />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
