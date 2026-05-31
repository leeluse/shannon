import { StepFirstTemplate } from '@/components/modal/deploy/StepFirstTemplate';
import { StepSecondTemplate } from '@/components/modal/deploy/StepSecondTemplate';


export const STEP = [1, 2];

export const STEP_INFO = [
    {
        title: '시작점이 될 템플릿을 골라 보세요',
        Component: StepFirstTemplate,
    },
    {
        title: 'AI에게 바로 시키기 전에, 요청서를 구체화해요.',
        Component: StepSecondTemplate,
    },
]

export const TEMPLATES = [
    {
        id: 1,
        name: 'Project Brief',
        keyword: ['웹', '앱', '사이드 프로젝트'],
        descript: '웹 / 앱 및 사이드 프로젝트 설계',
    },
    {
        id: 2,
        name: 'UI/UX Brief',
        keyword: ['UI', 'UX', '디자인'],
        descript: '웹페이지 / 앱 / 대시보드 디자인',
    },
    {
        id: 3,
        name: 'PPT Brief',
        keyword: ['발표', '강의', '보고서'],
        descript: 'PPT 초안 작성 및 콘텐츠 기획',
    },
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