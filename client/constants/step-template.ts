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