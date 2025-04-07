export function getCSSVariable(name: string): string {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}
