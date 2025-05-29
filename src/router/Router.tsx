import { BrowserRouter, Routes, Route } from 'react-router';
import rolesConfig from '../roles';

import { AuthenticatedLayout } from '../layouts/AuthenticatedLayout';
import { ClientDashboard } from '../pages/ClientDashboard';
import { ClientProgress } from '../pages/ClientProgress';
import { ClientSession } from '../pages/ClientSession';
import { ClientMembership } from '../pages/ClientMembership/ClientMembership';
import { ClientWorkout } from '../pages/ClientWorkout';
import { EmployeeDashboard } from '../pages/EmployeeDashboard';
import { EmployeeClients } from '../pages/EmployeeClients';
import { EmployeeTrainingHalls } from '../pages/EmployeeTrainingHalls';
import { EmployeeNotifications } from '../pages/EmployeeNotifications';
import { ClientWorkoutDetails } from '../pages/ClientWorkoutDetails';
import { CoachDashboard } from '../pages/CoachDashboard';
import { CoachClients } from '../pages/CoachClients';
import { CoachSessions } from '../pages/CoachSessions';
import { CoachWorkoutDetails } from '../pages/CoachWorkoutDetails';
import { CoachClientDetails } from '../pages/CoachClientDetails';
import { EmployeeClientsCreation } from '../pages/EmployeeClientCreation';
import { CoachNewSession } from '../pages/CoachNewSession';
import { EmployeeClientsDetails } from '@/pages/EmployeeClientsDetails';
import { EmployeeHallsDetails } from '@/pages/EmployeeHallsDetails';
import { AuthGuard } from './AuthGuard';
import { ManagerEmployees } from '@/pages/ManagerEmployees';
import { ManagerNewEmployee } from '@/pages/ManagerNewEmployee';
import { ManagerEmployeeDetails } from '@/pages/ManagerEmployeeDetails';
import { ManagerDashboard } from '@/pages/ManagerDashboard/ManagerDashboard';
import { ManagerClients } from '@/pages/ManagerClients';
import { Logout } from '@/pages/Logout';

export function Router() {
    return (
        <BrowserRouter>
            <AuthGuard>
                <Routes>
                    <Route path='logout' element={<Logout />} />
                    <Route
                        path={rolesConfig['client'].routePrefix}
                        element={<AuthenticatedLayout renderChat role='client' />}
                    >
                        <Route path='dashboard' element={<ClientDashboard />} />
                        <Route path='progress' element={<ClientProgress />} />
                        <Route path='sessions' element={<ClientSession />} />
                        <Route path='membership' element={<ClientMembership />} />
                        <Route path='workout' element={<ClientWorkout />} />
                        <Route path='workout/:id' element={<ClientWorkoutDetails />} />
                    </Route>

                    <Route
                        path={rolesConfig['employee'].routePrefix}
                        element={<AuthenticatedLayout renderChat role='employee' />}
                    >
                        <Route path='dashboard' element={<EmployeeDashboard />} />
                        <Route path='clients' element={<EmployeeClients />} />
                        <Route path='training-halls' element={<EmployeeTrainingHalls />} />
                        <Route path='notifications' element={<EmployeeNotifications />} />
                        <Route path='clients/:id' element={<EmployeeClientsCreation />} />
                        <Route path='client-details' element={<EmployeeClientsDetails />} />
                        <Route path='training-halls/:id' element={<EmployeeHallsDetails />} />
                    </Route>

                    <Route
                        path={rolesConfig['coach'].routePrefix}
                        element={<AuthenticatedLayout renderChat role='coach' />}
                    >
                        <Route path='dashboard' element={<CoachDashboard />} />
                        <Route path='clients' element={<CoachClients />} />
                        <Route path='sessions' element={<CoachSessions />} />
                        <Route path='workout/:id' element={<CoachWorkoutDetails />} />
                        <Route path='client/:id' element={<CoachClientDetails />} />
                        <Route path='new-session' element={<CoachNewSession />} />
                    </Route>

                    <Route
                        path={rolesConfig['manager'].routePrefix}
                        element={<AuthenticatedLayout renderChat role='manager' />}
                    >
                        <Route path='dashboard' element={<ManagerDashboard />} />
                        <Route path='clients' element={<ManagerClients />} />
                        <Route path='clients/:id' element={<EmployeeClientsCreation />} />
                        <Route path='employees' element={<ManagerEmployees />} />
                        <Route path='new-employee' element={<ManagerNewEmployee />} />
                        <Route path='employees/:id' element={<ManagerEmployeeDetails />} />
                    </Route>
                </Routes>
            </AuthGuard>
        </BrowserRouter>
    );
}
