import { BrowserRouter, Routes, Route } from 'react-router';
import { rolesConfig } from '@/roles';

import { AuthenticatedLayout } from '@/layouts/AuthenticatedLayout';
import { ClientProgressPage } from '@/pages/client/ClientProgressPage';
import { ClientMembershipPage } from '@/pages/client/ClientMembershipPage';
import { ClientWorkoutPage } from '@/pages/client/ClientWorkoutPage';
import { ClientDashboardPage } from '@/pages/client/ClientDashboardPage';
// import { ManagerEmployees } from '@/pages/ManagerEmployees';
// import { ManagerNewEmployee } from '@/pages/ManagerNewEmployee';
// import { ManagerEmployeeDetails } from '@/pages/ManagerEmployeeDetails';
// import { ManagerDashboard } from '@/pages/ManagerDashboard/ManagerDashboard';
// import { ManagerClients } from '@/pages/ManagerClients';
// import { ManagerClientDetails } from '@/pages/ManagerClientDetails';
// import { ManagerTrainingHalls } from '@/pages/ManagerTrainingHalls';
// import { ManagerHallDetails } from '@/pages/ManagerHallDetails';
// import { ManagerNewHall } from '@/pages/ManagerNewHall';
import { AuthGuard } from './AuthGuard';
import { EmployeeDashboardPage } from '@/pages/employee/EmployeeDashboardPage';
import { MembershipCreationPage } from '@/pages/common/MembershipCreationPage';
import { ClientDetailsPage } from '@/pages/common/ClientDetailsPage';
import { HallDetailsPage } from '@/pages/common/HallDetailsPage';
import { ClientsPage } from '@/pages/common/ClientsPage';
import { HallsPage } from '@/pages/common/HallsPage';
import { CoachClientDetailsPage } from '@/pages/coach/CoachClientDetailsPage';
import { CoachDashboardPage } from '@/pages/coach/CoachDashboardPage';
import { SessionsPage } from '@/pages/common/SessionsPage';
import { WorkoutDetailsPage } from '@/pages/common/WorkoutDetailsPage';
import { CoachNewSessionPage } from '@/pages/coach/CoachNewSessionPage';

export function Router() {
    return (
        <BrowserRouter>
            <AuthGuard>
                <Routes>
                    <Route
                        path={rolesConfig['client'].routePrefix}
                        element={<AuthenticatedLayout renderChat={false} role='client' />}
                    >
                        <Route path='dashboard' element={<ClientDashboardPage />} />
                        <Route path='progress' element={<ClientProgressPage />} />
                        <Route path='sessions' element={<SessionsPage />} />
                        <Route path='membership' element={<ClientMembershipPage />} />
                        <Route path='workout' element={<ClientWorkoutPage />} />
                        <Route path='workout/:id' element={<WorkoutDetailsPage />} />
                    </Route>

                    <Route
                        path={rolesConfig['employee'].routePrefix}
                        element={<AuthenticatedLayout renderChat={false} role='employee' />}
                    >
                        <Route path='dashboard' element={<EmployeeDashboardPage />} />
                        <Route path='clients' element={<ClientsPage />} />
                        <Route path='training-halls' element={<HallsPage />} />
                        <Route path='create-membership' element={<MembershipCreationPage />} />
                        <Route path='clients/:id' element={<ClientDetailsPage />} />
                        <Route path='training-halls/:id' element={<HallDetailsPage />} />
                    </Route>

                    <Route
                        path={rolesConfig['coach'].routePrefix}
                        element={<AuthenticatedLayout renderChat={false} role='coach' />}
                    >
                        <Route path='dashboard' element={<CoachDashboardPage />} />
                        <Route path='clients' element={<ClientsPage />} />
                        <Route path='sessions' element={<SessionsPage />} />
                        <Route path='workout/:id' element={<WorkoutDetailsPage />} />
                        <Route path='clients/:id' element={<CoachClientDetailsPage />} />
                        <Route path='new-session' element={<CoachNewSessionPage />} />
                    </Route>

                    {/* 
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
                    </Route> */}
                </Routes>
            </AuthGuard>
        </BrowserRouter>
    );
}
