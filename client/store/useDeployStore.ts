import { create } from "zustand";

interface DeployState {
    step: {
        number: number;
        active: boolean;
    };
    nextStep: () => void;
    prevStep: () => void;
    card: {
        templateId: number,
        details: string,
        targetId: number,
        styleId: number[]

    };
    resetCard: () => void;
    setCard: (fields: Partial<DeployState['card']>) => void;

}

export const useDeployStore = create<DeployState>((set) => ({
    step: {
        active: true,
        number: 1,
    },
    card: {
        templateId: 0,
        details: '',
        targetId: 0,
        styleId: []
    },
    resetCard: () => set((state) => ({
        ...state,
        step: {
            active: false,
            number: 1
        },
        card: {
            templateId: 0,
            details: '',
            targetId: 0,
            styleId: []
        }
    })),
    nextStep: () => set((state) => ({ step: { number: state.step.number + 1, active: true } })),
    prevStep: () => set((state) => ({ step: { number: state.step.number - 1, active: true } })),
    setCard: (fields) => set((state) => ({ card: { ...state.card, ...fields } }))
}));
