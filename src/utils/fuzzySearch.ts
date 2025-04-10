import Fuse from 'fuse.js';

export function fuzzySearch<T = string | object>(needle: string, haystack: T[], keyPath?: string) {
    const options = {
        keys: [keyPath ?? '']
    };

    const fuse = new Fuse(haystack, options);
    return fuse.search(needle).map(result => result.item);
}
