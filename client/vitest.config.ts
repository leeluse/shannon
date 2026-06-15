import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./tests/setup.ts'], // 테스트 실행 전 실행할 셋업 파일 경로
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './'), // Next.js의 @/ 경로 매핑 설정
        },
    },
});
