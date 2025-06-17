import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

function pathResolve(dir: string) {
    return resolve(process.cwd(), '.', dir);
}

export default defineConfig({
    plugins: [react()],
    test: {
        browser: {
            enabled: true,
            provider: 'playwright',
            instances: [{ browser: 'chromium' }, { browser: 'firefox' }]
        }
    },
    resolve: {
        alias: {
            '@': pathResolve('src')
        }
    }
});
