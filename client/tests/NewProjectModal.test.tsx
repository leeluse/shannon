import { vi, describe, it, expect, beforeEach } from 'vitest';
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewProjectModal from '@/app/(workspace)/@modal/(.)projects/new/page';
import { useDeployStore } from '@/store/useDeployStore';
import { toast } from 'sonner';

// 이 파일은 직접 하나씩 작성해 나갈 테스트 파일입니다.
// 1. Next의 라우터 기능 가짜(mock)로 만들기
const mockBack = vi.fn();

vi.mock('next/navigation', () => ({
    useRouter: () => ({
        back: mockBack,
    }),
}));
// 2. 알림창(sonner toast) 가짜(Mock)로 만들기
vi.mock('sonner', () => ({
    toast: {
        error: vi.fn(),   // 에러 팝업창 감시 카메라
        success: vi.fn(), // 성공 팝업창 감시 카메라
    },
}));



describe("NewProjectModal 통합 테스트", () => {
    // 각 테스트를 실행하기 전에 전역 상태를 초기화하고, 
    beforeEach(() => {
        // 가짜 기능(mock)에 기록된 클릭 횟수나 에러 기록을 초기화해 줍니다.
        vi.clearAllMocks();

        // 전역 상태 초기화
        useDeployStore.getState().resetCard();
    });

    it("모달이 정상적으로 렌더링되어야 함", () => {
        // 1. 가상 브라우저(JSDOM)에 모달 컴포넌트를 그립니다.
        render(<NewProjectModal />);

        // 2. Step 1 헤더와 설명이 화면에 잘 존재하는지 채점관이 검사합니다.
        expect(screen.getByText('STEP 1')).toBeInTheDocument();
        expect(screen.getByText('어떤 걸 만들고 싶어요?')).toBeInTheDocument();
        expect(screen.getByText('가장 가까운 유형을 골라주세요.')).toBeInTheDocument();

        // 3. 선택할 수 있는 템플릿 카드 글자들이 잘 노출되는지 검사합니다.
        expect(screen.getByText('사이드 프로젝트')).toBeInTheDocument();
        expect(screen.getByText('UI / UX 설계')).toBeInTheDocument();
        expect(screen.getByText('발표 자료')).toBeInTheDocument();

        // 4. 하단 버튼들을 검사합니다.
        // 첫 번째 단계이므로 '이전' 버튼은 없어야 하고, '다음' 버튼은 있어야 합니다.
        expect(screen.queryByText('이전')).not.toBeInTheDocument();
        expect(screen.getByText('다음')).toBeInTheDocument();
    });


    describe("Validation 테스트 (STEP 2: 설명 작성 단계)", () => {
        // [공통 도우미 함수] Step 1을 넘기고 Step 2(설명 입력창)까지 이동하게 해 주는 가짜 유저
        const goToStep2 = async () => {
            render(<NewProjectModal />)
            fireEvent.click(screen.getByText('사이드 프로젝트'));
            fireEvent.click(screen.getByText('다음'));

            // Step 2 단계 글자가 화면에 뜰 때까지 대기
            await waitFor(() => {
                expect(screen.getByText('STEP 2')).toBeInTheDocument();
            });
        }

        it("상세 설명(detaiuls)에 아무것도 입력하지 않고 다음 버튼 클릭 시, 검증 에러 메시지가 표시가 되고 진행이 차단된다", async () => {
            // 1단계 카드 클릭 후 2단계까지 이동해 줍니다.
            await goToStep2();
            // 2단계에서 '다음'버튼을 클릭합니다.
            fireEvent.click(screen.getByText('다음'));

            // 에러 메시지(toast.error)가 Zod 규격(최소 10자 이상)에 걸려 호출되었는지 확인
            await waitFor(() => {
                expect(toast.error).toHaveBeenCalledWith(
                    '최소 10자 이상 입력이 필요합니다.',
                    expect.any(Object)
                );
            });

            // 화면은 여전히 STEP 2 단계에 머물러 있어야 함
            expect(screen.getByText('STEP 2')).toBeInTheDocument();
        })

        it('상세 설명(details)에 공백만 입력하고 다음 버튼 클릭 시, trim 처리되어 차단된다', async () => {
            await goToStep2();

            // 공백을 10자 입력 (스페이스바 연타)
            const textarea = screen.getByPlaceholderText('예: TODO 리스트 웹사이트 만들어 줘');
            await userEvent.type(textarea, '          '); 

            fireEvent.click(screen.getByText('다음'));

            // 빈 글자로 간주되어 검증 탈락
            await waitFor(() => {
                expect(toast.error).toHaveBeenCalledWith(
                    '최소 10자 이상 입력이 필요합니다.',
                    expect.any(Object)
                );
            });
            expect(screen.getByText('STEP 2')).toBeInTheDocument();
        });

        it('상세 설명(details)에 10자 미만으로 입력하고 다음 버튼 클릭 시, 에러가 발생한다', async () => {
            await goToStep2();

            // '단어' (2글자)만 입력
            const textarea = screen.getByPlaceholderText('예: TODO 리스트 웹사이트 만들어 줘');
            await userEvent.type(textarea, '단어'); 

            fireEvent.click(screen.getByText('다음'));

            // 10자 미만이므로 검증 탈락
            await waitFor(() => {
                expect(toast.error).toHaveBeenCalledWith(
                    '최소 10자 이상 입력이 필요합니다.',
                    expect.any(Object)
                );
            });
            expect(screen.getByText('STEP 2')).toBeInTheDocument();
        });

        it('상세 설명(details)에 앞뒤 공백을 포함해 10자 이상 입력 시, 검증을 통과해 STEP 3로 진입하며 스토어에는 원본 값이 저장된다', async () => {
            await goToStep2();

            // 앞뒤에 공백을 넣은 13글자 입력
            const textarea = screen.getByPlaceholderText('예: TODO 리스트 웹사이트 만들어 줘');
            await userEvent.type(textarea, '   올바른 상세 설명 내용   '); 

            fireEvent.click(screen.getByText('다음'));

            // 검증을 무사히 통과하고 STEP 3 단계로 진입해야 함
            await waitFor(() => {
                expect(screen.getByText('STEP 3')).toBeInTheDocument();
            });

            // 스토어에는 사용자가 입력한 원래의 값이 저장되어 있어야 함
            const storeState = useDeployStore.getState();
            expect(storeState.card.details).toBe('   올바른 상세 설명 내용   ');
        });

        it('상세 설명(details)에 공백을 포함해서 10자이지만 실제 글자가 10자 미만인 경우(예: "   단어   "), trim 처리되어 검증에서 탈락한다', async () => {
            await goToStep2();

            // 공백을 앞뒤에 둔 단어 입력 (총 10자이나 실제 글자는 '단어' 2자)
            const textarea = screen.getByPlaceholderText('예: TODO 리스트 웹사이트 만들어 줘');
            await userEvent.type(textarea, '   단어   '); 

            fireEvent.click(screen.getByText('다음'));

            // trim 처리되면 2글자이므로 에러가 발생해야 함
            await waitFor(() => {
                expect(toast.error).toHaveBeenCalledWith(
                    '최소 10자 이상 입력이 필요합니다.',
                    expect.any(Object)
                );
            });
            expect(screen.getByText('STEP 2')).toBeInTheDocument();
        });
    })

    describe('Submit 및 전체 Flow 테스트', () => {
        it('전체 단계를 통과하여 배포 완료하면 스토어가 초기화되고 이전 페이지로 돌아간다', async () => {
            render(<NewProjectModal />);

            // [Step 1] 사이드 프로젝트 클릭 후 다음
            fireEvent.click(screen.getByText('사이드 프로젝트'));
            fireEvent.click(screen.getByText('다음'));

            // [Step 2] 상세 글 작성 후 다음
            await waitFor(() => expect(screen.getByText('STEP 2')).toBeInTheDocument());
            const textarea = screen.getByPlaceholderText('예: TODO 리스트 웹사이트 만들어 줘');
            await userEvent.type(textarea, '프로젝트를 위한 아주 상세한 10자 이상의 내용입니다.');
            fireEvent.click(screen.getByText('다음'));

            // [Step 3] 대상 선택 후 다음
            await waitFor(() => expect(screen.getByText('STEP 3')).toBeInTheDocument());
            fireEvent.click(screen.getByText('클라이언트 / 고객'));
            fireEvent.click(screen.getByText('다음'));

            // [Step 4] 분위기 스타일(체크박스) 선택 후 다음
            await waitFor(() => expect(screen.getByText('STEP 4')).toBeInTheDocument());
            // label 안의 텍스트가 '미니멀  —  불필요한 요소 없이 깔끔하게' 이므로 '미니멀'을 찾음
            const styleOption = screen.getByLabelText(/미니멀/);
            fireEvent.click(styleOption);
            fireEvent.click(screen.getByText('다음'));

            // [Step 5] 최종 요약 확인 및 배포하기
            await waitFor(() => expect(screen.getByText('STEP 5')).toBeInTheDocument());
            
            // 요약 화면에 우리가 입력한 데이터가 올바르게 매칭되는지 확인
            expect(screen.getByText('유형')).toBeInTheDocument();
            expect(screen.getByText('사이드 프로젝트')).toBeInTheDocument();
            expect(screen.getByText('프로젝트를 위한 아주 상세한 10자 이상의 내용입니다.')).toBeInTheDocument();
            expect(screen.getByText('대상')).toBeInTheDocument();
            expect(screen.getByText('클라이언트 / 고객')).toBeInTheDocument();
            expect(screen.getByText('분위기')).toBeInTheDocument();
            expect(screen.getByText('미니멀')).toBeInTheDocument();

            // 배포하기 버튼 클릭
            const deployButton = screen.getByText('배포하기');
            fireEvent.click(deployButton);

            // 배포 성공 알림(toast.success)이 호출되었는지 확인
            expect(toast.success).toHaveBeenCalledWith('배포되었습니다');

            // Zustand 스토어가 깔끔하게 초기화되었는지 확인
            const storeState = useDeployStore.getState();
            expect(storeState.card.templateId).toBe(0);
            expect(storeState.card.details).toBe('');
            expect(storeState.card.targetId).toBe(0);
            expect(storeState.card.styleId).toEqual([]);

            // 뒤로가기(router.back) 함수가 1번 실행되었는지 확인
            expect(mockBack).toHaveBeenCalledTimes(1);
        });
    });
})