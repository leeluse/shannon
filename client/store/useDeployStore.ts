import { create } from "zustand";

interface DeployState {
    step: {
        number: number;
        active: boolean;
    };
    nextStep: () => void;
    prevStep: () => void;
    card: {
        id: number,
        name: string,
        descript: string,
        detailTemplates: string
    };
    setCard: (fields: Partial<DeployState['card']>) => void;

}

export const useDeployStore = create<DeployState>((set) => ({
    step: {
        active: true,
        number: 1,
    },
    card: {
        id: 0,
        name: '',
        descript: '',
        detailTemplates: ''
    },
    nextStep: () => set((state) => ({ step: { number: state.step.number + 1, active: true } })),
    prevStep: () => set((state) => ({ step: { number: state.step.number - 1, active: true } })),
    setCard: (fields) => set((state) => ({ card: { ...state.card, ...fields } }))
}));
