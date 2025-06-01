import { BrowserRouter, Routes, Route } from 'react-router';
import { rolesConfig } from '../roles';

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
import { AuthGuard } from './AuthGuard';
import { ManagerEmployees } from '@/pages/ManagerEmployees';
import { ManagerNewEmployee } from '@/pages/ManagerNewEmployee';
import { ManagerEmployeeDetails } from '@/pages/ManagerEmployeeDetails';
import { ManagerDashboard } from '@/pages/ManagerDashboard/ManagerDashboard';
import { ManagerClients } from '@/pages/ManagerClients';
import { ManagerClientDetails } from '@/pages/ManagerClientDetails';
import { ManagerTrainingHalls } from '@/pages/ManagerTrainingHalls';
import { ManagerHallDetails } from '@/pages/ManagerHallDetails';
import { ManagerNewHall } from '@/pages/ManagerNewHall';
import { EmployeeHallDetails } from '@/pages/EmployeeHallsDetails';
import { EmployeeClientsDetails } from '@/pages/EmployeeClientsDetails';
export function Router() {
    return (
        <BrowserRouter>
            <AuthGuard>
                <Routes>
                    <Route
                        path={rolesConfig['client'].routePrefix}
                        element={<AuthenticatedLayout renderChat={false} role='client' />}
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
                        element={<AuthenticatedLayout renderChat={false} role='employee' />}
                    >
                        <Route path='dashboard' element={<EmployeeDashboard />} />
                        <Route path='clients' element={<EmployeeClients />} />
                        <Route path='training-halls' element={<EmployeeTrainingHalls />} />
                        <Route path='notifications' element={<EmployeeNotifications />} />
                        <Route path='create-membership' element={<EmployeeClientsCreation />} />
                        <Route path='client-details' element={<EmployeeClientsDetails />} />
                        <Route path='training-halls/:id' element={<EmployeeHallDetails />} />
                    </Route>

                    <Route
                        path={rolesConfig['coach'].routePrefix}
                        element={<AuthenticatedLayout renderChat={false} role='coach' />}
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
                        element={<AuthenticatedLayout renderChat={false} role='manager' />}
                    >
                        <Route path='dashboard' element={<ManagerDashboard />} />
                        <Route path='clients' element={<ManagerClients />} />
                        <Route path='clients/:id' element={<EmployeeClientsCreation />} />
                        <Route path='employees' element={<ManagerEmployees />} />
                        <Route path='new-employee' element={<ManagerNewEmployee />} />
                        <Route path='employees/:id' element={<ManagerEmployeeDetails />} />
                        <Route path='client-details' element={<ManagerClientDetails />} />
                        <Route path='training-halls' element={<ManagerTrainingHalls />} />
                        <Route path='training-halls/:id' element={<ManagerHallDetails />} />
                        <Route path='new-hall' element={<ManagerNewHall />} />
                    </Route>
                </Routes>
            </AuthGuard>
        </BrowserRouter>
    );
}
