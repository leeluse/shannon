import { StepFirstTemplate } from '@/components/modal/deploy/StepFirstTemplate';
import { StepSecondTemplate } from '@/components/modal/deploy/StepSecondTemplate';
import { Rocket, LayoutDashboard, Presentation, FileText, Map, MoreHorizontal } from 'lucide-react';


export const STEP = [1, 2, 3, 4, 5];

export const STEP_INFO = [
    {
        title: '어떤 걸 만들고 싶어요?',
        des: '가장 가까운 유형을 골라주세요',
        Component: StepFirstTemplate,
    },
    {
        title: '한 줄로 설명해 주세요',
        des: '완벽하지 않아도 괜찮아요. 방향만 잡으면 돼요',
        Component: StepSecondTemplate,
    },
    {
        title: '누구를 위한 결과물인가요?',
        des: '대상이 명확할수록 결과가 정교해져요',
        Component: StepSecondTemplate,
    },
    {
        title: '어떤 분위기를 원해요?',
        des: '여러 개 골라도 돼요',
        Component: StepSecondTemplate,
    },
    {
        title: '확인하고 생성할게요',
        des: '잘못된 내용이 있으면 뒤로 돌아가 수정하세요',
        Component: StepSecondTemplate,
    },
]

export const TEMPLATES = [
    {
        id: 1,
        name: '사이드 프로젝트',
        descript: '앱, 웹서비스, 도구',
        icon: Rocket,
    },
    {
        id: 2,
        name: 'UI / 대시보드',
        descript: '화면 설계, 컴포넌트',
        icon: LayoutDashboard,
    },
    {
        id: 3,
        name: '발표 자료',
        descript: 'PPT, 강의안, 제안서',
        icon: Presentation,
    },
    // {
    //     id: 4,
    //     name: '기술 문서',
    //     descript: '가이드, 명세서, README',
    //     icon: FileText,
    // },
    // {
    //     id: 5,
    //     name: '기획 / 전략',
    //     descript: '로드맵, 제품 계획',
    //     icon: Map,
    // },
    // {
    //     id: 6,
    //     name: '기타',
    //     descript: '직접 입력',
    //     icon: MoreHorizontal,
    // },
]


export const TEMPLATE_INFO = [
    {
        id: 1,
        type: 'project',
        label: 'Project Brief',
        what: '예: TODO 리스트 웹사이트 만들어 줘',
        who: '예: 개인 생산성을 높이고 싶은 일반 사용자',
        goal: '예: 할 일을 쉽게 등록하고 완료 상태를 관리할 수 있게 하기',
        style: '예: 심플하고 직관적인 디자인',
    },
    {
        id: 2,
        type: 'ui',
        label: 'UI Brief',
        what: '예: 관리자 대시보드 UI 설계해 줘',
        who: '예: 매출과 사용자 현황을 확인하는 운영 관리자',
        goal: '예: 핵심 지표를 한눈에 파악하고 빠르게 의사결정할 수 있게 하기',
        style: '예: 현대적이고 깔끔한 디자인, 다크 모드 지원',
    },
    {
        id: 3,
        type: 'ppt',
        label: 'PPT Brief',
        what: '예: 웹 기초 강의 PPT 만들어 줘',
        who: '예: 웹 개발을 처음 배우는 주니어 개발자',
        goal: '예: 웹의 기본 개념을 쉽게 이해하고 실무 학습을 시작할 수 있게 하기',
        style: '예: 전문적이고 시각적으로 깔끔한 디자인',
    },
] as const