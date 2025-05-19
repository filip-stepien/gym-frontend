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
import { EmployeeTrainingHalls } from './pages/EmployeeTrainingHalls';
import { EmployeeNotifications } from './pages/EmployeeNotifications';
import { ClientWorkoutDetails } from './pages/ClientWorkoutDetails';

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
                    <Route path='workout/:id' element={<ClientWorkoutDetails />} />
                </Route>

                <Route path='/employee' element={<EmployeeLayout renderChat />}>
                    <Route path='dashboard' element={<EmployeeDashboard />} />
                    <Route path='clients' element={<EmployeeClients />} />
                    <Route path='training-halls' element={<EmployeeTrainingHalls />} />
                    <Route path='notifications' element={<EmployeeNotifications />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
