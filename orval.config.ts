import { defineConfig } from 'orval';

export default defineConfig({
    'gym-api': {
        input: './openapi.yaml',
        output: './src/generated.ts',
        hooks: {
            afterAllFilesWrite: 'prettier --write'
        }
    }
});
