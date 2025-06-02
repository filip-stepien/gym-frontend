import { BrowserRouter, Routes, Route } from 'react-router';
import { rolesConfig } from '@/roles';
import { AuthenticatedLayout } from '@/layouts/AuthenticatedLayout';
import { AuthGuard } from './AuthGuard';
import { ClientProgressPage } from '@/pages/client/ClientProgressPage';
import { ClientMembershipPage } from '@/pages/client/ClientMembershipPage';
import { ClientWorkoutPage } from '@/pages/client/ClientWorkoutPage';
import { ClientDashboardPage } from '@/pages/client/ClientDashboardPage';
import { ClientDetailsPage } from '@/pages/common/ClientDetailsPage';
import { ClientsPage } from '@/pages/common/ClientsPage';
import { EmployeeDashboardPage } from '@/pages/employee/EmployeeDashboardPage';
import { EmployeeHallDetailsPage } from '@/pages/employee/EmployeeHallDetailsPage';
import { CoachClientDetailsPage } from '@/pages/coach/CoachClientDetailsPage';
import { CoachDashboardPage } from '@/pages/coach/CoachDashboardPage';
import { CoachNewSessionPage } from '@/pages/coach/CoachNewSessionPage';
import { ManagerDashboardPage } from '@/pages/manager/ManagerDashboardPage';
import { ManagerEmployeeDetailsPage } from '@/pages/manager/ManagerEmployeeDetailsPage';
import { ManagerEmployeesPage } from '@/pages/manager/ManagerEmployeesPage';
import { ManagerEmployeeCreationPage } from '@/pages/manager/ManagerEmployeeCreationPage';
import { ManagerHallCreationPage } from '@/pages/manager/ManagerHallCreationPage';
import { MembershipCreationPage } from '@/pages/common/MembershipCreationPage';
import { HallsPage } from '@/pages/common/HallsPage';
import { SessionsPage } from '@/pages/common/SessionsPage';
import { WorkoutDetailsPage } from '@/pages/common/WorkoutDetailsPage';

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
                        <Route path='training-halls/:id' element={<EmployeeHallDetailsPage />} />
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

                    <Route
                        path={rolesConfig['manager'].routePrefix}
                        element={<AuthenticatedLayout renderChat={false} role='manager' />}
                    >
                        <Route path='dashboard' element={<ManagerDashboardPage />} />
                        <Route path='create-membership' element={<MembershipCreationPage />} />
                        <Route path='clients' element={<ClientsPage />} />
                        <Route path='clients/:id' element={<ClientDetailsPage />} />
                        <Route path='employees' element={<ManagerEmployeesPage />} />
                        <Route path='create-employee' element={<ManagerEmployeeCreationPage />} />
                        <Route path='employees/:id' element={<ManagerEmployeeDetailsPage />} />
                        <Route path='client-details' element={<ClientDetailsPage />} />
                        <Route path='training-halls' element={<HallsPage />} />
                        <Route path='training-halls/:id' element={<div></div>} />
                        <Route path='create-hall' element={<ManagerHallCreationPage />} />
                    </Route>
                </Routes>
            </AuthGuard>
        </BrowserRouter>
    );
}
