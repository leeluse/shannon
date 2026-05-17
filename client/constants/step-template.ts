import { StepFirstTemplate } from '@/components/modal/deploy/StepFirstTemplate';
import { StepSecondTemplate } from '@/components/modal/deploy/StepSecondTemplate';
import { StepThirdTemplate } from '@/components/modal/deploy/StepThirdTemplate';

export const STEP_INFO = [
    {
        title: '시작점이 될 템플릿을 골라 보세요. 다음 단계에서 자유롭게 수정할 수 있습니다.',
        Component: StepFirstTemplate,
    },
    {
        title: '시작할 모델을 선택해 보세요.',
        Component: StepSecondTemplate,
    },
    {
        title: '설정을 저장할 모델을 선택해 보세요',
        Component: StepThirdTemplate,
    }
]