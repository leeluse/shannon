import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GoogleLoginBtn, KakaoLoginBtn } from '@/components/common/btn/LoginBtn';

describe('LoginBtn', () => {
    it('구글 로그인 버튼이 서비스형 카피를 렌더링해야 함', () => {
        render(<GoogleLoginBtn />);

        expect(screen.getByRole('button', { name: /구글로 계속하기/i })).toBeInTheDocument();
        expect(screen.getByText('저장된 프로젝트와 작업 기록을 동기화해요')).toBeInTheDocument();
        expect(screen.getByText('→')).toBeInTheDocument();
    });

    it('카카오 로그인 버튼이 서비스형 카피를 렌더링해야 함', () => {
        render(<KakaoLoginBtn />);

        expect(screen.getByRole('button', { name: /카카오로 계속하기/i })).toBeInTheDocument();
        expect(screen.getByText('카카오 계정으로 더 빠르게 시작해요')).toBeInTheDocument();
        expect(screen.getAllByText('→')).toHaveLength(1);
    });
});
