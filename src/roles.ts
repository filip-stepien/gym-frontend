export type UserRole = 'manager' | 'client' | 'coach' | 'employee';

export type UserRoleConfig = {
    menuOptions: string[];
    routePrefix: string;
    defaultRoute: string;
};

export type UserRoleConfigMap = Record<UserRole, UserRoleConfig>;

export const rolesConfig: UserRoleConfigMap = {
    client: {
        menuOptions: ['dashboard', 'progress', 'sessions', 'membership', 'workout'],
        routePrefix: '/client',
        defaultRoute: '/dashboard'
    },
    employee: {
        menuOptions: ['dashboard', 'clients', 'training-halls'],
        routePrefix: '/employee',
        defaultRoute: '/dashboard'
    },
    coach: {
        menuOptions: ['dashboard', 'clients', 'sessions'],
        routePrefix: '/coach',
        defaultRoute: '/dashboard'
    },
    manager: {
        menuOptions: ['dashboard', 'clients', 'training-halls', 'employees'],
        routePrefix: '/manager',
        defaultRoute: '/dashboard'
    }
};

export const rolesPriority: Record<UserRole, number> = {
    manager: 4,
    coach: 3,
    employee: 2,
    client: 1
};
