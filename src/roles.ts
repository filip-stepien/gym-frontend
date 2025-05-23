export type UserRole = 'manager' | 'client' | 'coach' | 'employee';

export type UserRoleConfig = {
    menuOptions: string[];
    routePrefix: string;
    defaultRoute: string;
};

export type UserRoleConfigMap = Record<UserRole, UserRoleConfig>;

export default {
    client: {
        menuOptions: ['dashboard', 'progress', 'sessions', 'membership', 'workout'],
        routePrefix: '/client',
        defaultRoute: '/dashboard'
    },
    employee: {
        menuOptions: ['dashboard', 'clients', 'training-halls', 'notifications'],
        routePrefix: '/employee',
        defaultRoute: '/dashboard'
    },
    coach: {
        menuOptions: ['dashboard', 'clients', 'sessions'],
        routePrefix: '/coach',
        defaultRoute: '/dashboard'
    },
    manager: {
        menuOptions: [],
        routePrefix: '/manager',
        defaultRoute: '/dashboard'
    }
} satisfies UserRoleConfigMap;
