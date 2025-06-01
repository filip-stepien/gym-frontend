export function getRoleFromUrl() {
    const roles = ['manager', 'coach', 'client', 'employee'];
    const parts = new URL(window.location.href).pathname.split('/').filter(Boolean);
    return parts.find(part => roles.includes(part)) as string;
}
