import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());

    if (!env.VITE_API_URL) {
        throw new Error('VITE_API_URL is not set.');
    }

    if (!env.VITE_PROXY_URL) {
        throw new Error('VITE_PROXY_URL is not set.');
    }

    const pathname = new URL(env.VITE_PROXY_URL).pathname;

    return {
        plugins: [tsconfigPaths(), react(), tailwindcss()],
        server: {
            proxy: {
                [pathname]: {
                    target: env.VITE_API_URL,
                    rewrite: path => path.replace(new RegExp(`^${pathname}`), '')
                }
            }
        },
        build: {
            target: 'esnext'
        }
    };
});
