import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    base: '/association-studio-java-script/',
    resolve: {
        alias: {
            '@': path.resolve(import.meta.dirname, './src'),
        },
    },
    test: {
        setupFiles: ['./test/setup.js'],
        environment: 'jsdom',
        globals: true,
        coverage: {
            // 📊 Coverage Configuration
            provider: 'v8', // or 'istanbul'
            reporter: ['text', 'json', 'html'], // Formats to generate
            include: ['src/**/*.js'], // Only measure source code

            // Optional: Fail test suite if coverage drops below thresholds
            thresholds: {
                lines: 80,
                functions: 80,
                branches: 80,
                statements: 80,
            },
        },
    },
})
