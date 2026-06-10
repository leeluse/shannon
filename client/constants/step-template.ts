import { ConfirmDeployStep } from '@/components/modal/step/ConfirmDeployStep';
import { SelectTemplateStep } from '@/components/modal/step/SelectTemplateStep';
import { SelectStyleStep } from '@/components/modal/step/SelectStyleStep';
import { InputDetailsStep } from '@/components/modal/step/InputDetailsStep';
import { SelectTargetStep } from '@/components/modal/step/SelectTargetStep';
import { Rocket, LayoutDashboard, Presentation, UserCog, Users, BriefcaseBusiness, UsersRound, UserRoundPen, UserRoundCog } from 'lucide-react';


export const STEP = [1, 2, 3, 4, 5];

export const STEP_INFO = [
    {
        title: '어떤 걸 만들고 싶어요?',
        des: '가장 가까운 유형을 골라주세요.',
        Component: SelectTemplateStep,
    },
    {
        title: '설명해 주세요',
        des: '완벽하지 않아도 괜찮아요. 방향만 잡으면 돼요.',
        Component: InputDetailsStep,
    },
    {
        title: '누구를 위한 결과물인가요?',
        des: '대상이 명확할수록 결과가 정교해져요.',
        Component: SelectTargetStep,
    },
    {
        title: '어떤 분위기를 원해요?',
        des: '여러 개 골라도 돼요.',
        Component: SelectStyleStep,
    },
    {
        title: '확인하고 생성할게요',
        des: '잘못된 내용이 있으면 뒤로 돌아가 수정하세요',
        Component: ConfirmDeployStep,
    },
]

export const TEMPLATES = [
    {
        id: 1,
        name: '사이드 프로젝트',
        description: '앱, 웹서비스, 도구',
        placeholder: '예: TODO 리스트 웹사이트 만들어 줘',
        icon: Rocket,
        templates: [
            {
                label: "취업용 포트폴리오 사이트",
                description: "채용담당자가 30초 내 실력을 보는",
                fillText: "프론트엔드 개발자 취업을 위한 포트폴리오 사이트를 만들려고 해. 스타트업 채용담당자가 타깃이고, 프로젝트 3건 이상을 보여줄 거야. 깔끔하고 심플한 스타일로."
            },
            {
                label: "AI 활용 서비스",
                description: "AI로 문제를 해결하는 앱",
                fillText:
                    "AI를 활용한 사이드 프로젝트를 만들려고 해. 사용자가 짧게 입력하면 AI가 내용을 정리하거나 추천하거나 결과물을 생성해 주는 서비스야. 단순 채팅이 아니라 사용자의 문제를 해결하는 명확한 흐름이 있었으면 해."
            },
            {
                label: "개인 생산성 도구",
                description: "내가 매일 쓰는 작은 서비스",
                fillText:
                    "내가 매일 사용할 수 있는 개인 생산성 도구를 만들려고 해. 기록, 정리, 일정, 할 일, 습관 관리 중 하나를 중심 기능으로 두고, 사용자가 귀찮지 않게 빠르게 입력하고 다시 확인할 수 있는 구조였으면 해."
            },
            {
                label: "커뮤니티 서비스",
                description: "사람들이 글을 남기고 반응하는 공간",
                fillText:
                    "특정 관심사를 가진 사람들이 글을 작성하고 댓글이나 반응을 남길 수 있는 커뮤니티 서비스를 만들려고 해. 글 작성, 목록, 상세 페이지, 댓글, 좋아요, 검색/필터 같은 기본 기능이 필요해."
            },
            {
                label: "직접 입력",
                description: "내 프로젝트를 직접 설명할게",
                fillText: ""
            },
        ]
    },
    {
        id: 2,
        name: 'UI / UX 설계',
        description: '화면 설계, 컴포넌트',
        placeholder: '예: 관리자 대시보드 UI 설계해 줘',
        icon: LayoutDashboard,
        templates: [
            {
                label: "컴포넌트 시스템",
                description: "재사용 가능한 UI 구조",
                fillText:
                    "프로젝트에서 반복해서 사용할 수 있는 UI 컴포넌트 시스템을 설계하려고 해. 버튼, 입력창, 카드, 모달, 탭, 테이블, 드롭다운 같은 기본 컴포넌트를 일관된 디자인 규칙으로 정리하고 싶어."
            },
            {
                label: "사내 관리자 대시보드",
                description: "팀이 매일 쓰는 내부 도구",
                fillText: "팀원 10명이 매일 쓰는 사내 관리자 대시보드를 만들려고 해. 데이터 조회와 간단한 관리 기능이 핵심이고, 빠르고 직관적으로 쓸 수 있어야 해."
            },
            {
                label: "분석 리포트 화면",
                description: "차트와 지표 중심의 화면",
                fillText:
                    "서비스 데이터를 분석하는 리포트 대시보드 UI를 만들려고 해. 방문자 수, 전환율, 매출, 사용량 같은 주요 지표를 카드와 차트로 보여주고, 기간 필터와 카테고리 필터를 제공하고 싶어."
            },
            {
                label: "폼 / 입력 UX",
                description: "복잡한 입력을 쉽게 만드는 화면",
                fillText:
                    "사용자가 여러 정보를 입력해야 하는 폼 화면의 UI/UX를 설계하려고 해. 필수값, 단계 분리, 에러 메시지, placeholder, 자동완성, 입력 부담을 줄이는 방식까지 고려하고 싶어."
            },
            {
                label: "직접 입력",
                description: "내 프로젝트를 직접 설명할게",
                fillText: ""
            },
        ]
    },
    {
        id: 3,
        name: '발표 자료',
        description: 'PPT, 강의안, 제안서',
        placeholder: '예: 웹 기초 강의 PPT 만들어 줘',
        icon: Presentation,
        templates: [
            {
                label: "기술 강의 PPT",
                description: "개념을 쉽게 설명하는 교육 자료",
                fillText:
                    "개발 입문자를 대상으로 기술 강의용 PPT를 만들려고 해. 개념 설명부터 실습 예제까지 포함하고, 어려운 내용을 시각적으로 이해하기 쉽게 구성하고 싶어."
            },
            {
                label: "프로젝트 제안서",
                description: "아이디어와 가치를 설득하는 자료",
                fillText:
                    "새로운 프로젝트를 제안하기 위한 발표 자료를 만들려고 해. 현재 문제점, 해결 방안, 기대 효과, 일정, 비용 등을 포함하여 이해관계자를 설득하는 것이 목표야."
            },
            {
                label: "서비스 소개서",
                description: "제품과 기능을 소개하는 자료",
                fillText:
                    "서비스를 소개하기 위한 발표 자료를 만들려고 해. 서비스 개요, 주요 기능, 차별점, 기대 효과를 중심으로 처음 보는 사람도 쉽게 이해할 수 있도록 설명하고 싶어."
            },
            {
                label: "투자자 피치덱",
                description: "사업성과 성장 가능성을 설명",
                fillText:
                    "투자자를 대상으로 서비스와 사업 모델을 소개하는 피치덱을 만들려고 해. 시장 문제, 솔루션, 경쟁 우위, 수익 모델, 성장 전략을 포함하고 싶어."
            },
            {
                label: "교육 커리큘럼",
                description: "여러 차시로 구성된 학습 자료",
                fillText:
                    "특정 주제를 체계적으로 학습할 수 있는 교육 커리큘럼과 PPT를 만들려고 해. 초급자도 이해할 수 있도록 단계별 학습 흐름과 실습 예제를 포함하고 싶어."
            },
            {
                label: "직접 입력",
                description: "내 발표 주제를 직접 설명할게",
                fillText: ""
            },
        ]
    },
]





export const TEMPLATES_FOR = [
    {
        id: 1,
        name: '클라이언트 / 고객',
        description: '외부 설득, 제안 목표',
        icon: BriefcaseBusiness
    },
    {
        id: 2,
        name: '동료 / 팀 내부',
        description: '협업, 논의, 업무 정리',
        icon: UsersRound
    },
    {
        id: 3,
        name: '주니어 / 학습자',
        description: '교육, 온보딩, 지식 공유',
        icon: UserRoundPen
    },
    {
        id: 4,
        name: '나 자신',
        description: '개인 사용, 사이드 프로젝트',
        icon: UserRoundCog
    },
]


export const TEMPLATES_STYLE = [
    {
        id: 1,
        name: '미니멀',
        description: '불필요한 요소 없이 깔끔하게',
    },
    {
        id: 2,
        name: '시각적',
        description: '다이어그램, 차트, 이미지 적극 활용',
    },
    {
        id: 3,
        name: '친근함',
        description: '쉬운 말로, 처음 보는 사람도 이해 가능',
    },
    {
        id: 4,
        name: '전문적',
        description: '데이터와 논리를 바탕으로 신뢰감 있게',
    },
    {
        id: 5,
        name: '창의적',
        description: '예상치 못한 아이디어와 표현을 사용',
    }
]