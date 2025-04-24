import { defineConfig } from 'orval';

export default defineConfig({
    'gym-api': {
        input: './openapi.yaml',
        output: './src/generated/gym-api.ts',
        hooks: {
            afterAllFilesWrite: 'prettier --write'
        }
    }
    // FIXME remove this commment
});
