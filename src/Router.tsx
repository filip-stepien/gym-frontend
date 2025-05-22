import { BrowserRouter, Routes, Route } from 'react-router';

import { AuthenticatedLayout } from './layouts/AuthenticatedLayout';
import { ClientDashboard } from './pages/ClientDashboard';
import { ClientProgress } from './pages/ClientProgress';
import { ClientSession } from './pages/ClientSession';
import { ClientMembership } from './pages/ClientMembership/ClientMembership';
import { ClientWorkout } from './pages/ClientWorkout';
import { EmployeeDashboard } from './pages/EmployeeDashboard';
import { EmployeeClients } from './pages/EmployeeClients';
import { EmployeeTrainingHalls } from './pages/EmployeeTrainingHalls';
import { EmployeeNotifications } from './pages/EmployeeNotifications';
import { ClientWorkoutDetails } from './pages/ClientWorkoutDetails';
import { CoachDashboard } from './pages/CoachDashboard';
import { CoachClients } from './pages/CoachClients';
import { CoachSessions } from './pages/CoachSessions';
import { CoachWorkoutDetails } from './pages/CoachWorkoutDetails';
import { CoachClientDetails } from './pages/CoachClientDetails';
import { EmployeeClientsCreation } from './pages/EmployeeClientCreation';
import { CoachNewSession } from './pages/CoachNewSession';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/client'
                    element={<AuthenticatedLayout renderChat accountType='client' />}
                >
                    <Route path='dashboard' element={<ClientDashboard />} />
                    <Route path='progress' element={<ClientProgress />} />
                    <Route path='sessions' element={<ClientSession />} />
                    <Route path='membership' element={<ClientMembership />} />
                    <Route path='workout' element={<ClientWorkout />} />
                    <Route path='workout/:id' element={<ClientWorkoutDetails />} />
                </Route>

                <Route
                    path='/employee'
                    element={<AuthenticatedLayout renderChat accountType='employee' />}
                >
                    <Route path='dashboard' element={<EmployeeDashboard />} />
                    <Route path='clients' element={<EmployeeClients />} />
                    <Route path='training-halls' element={<EmployeeTrainingHalls />} />
                    <Route path='notifications' element={<EmployeeNotifications />} />
                    <Route path='clients/:id' element={<EmployeeClientsCreation />} />
                </Route>

                <Route
                    path='/coach'
                    element={<AuthenticatedLayout renderChat accountType='coach' />}
                >
                    <Route path='dashboard' element={<CoachDashboard />} />
                    <Route path='clients' element={<CoachClients />} />
                    <Route path='sessions' element={<CoachSessions />} />
                    <Route path='workout/:id' element={<CoachWorkoutDetails />} />
                    <Route path='client/:id' element={<CoachClientDetails />} />
                    <Route path='new-session' element={<CoachNewSession />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
