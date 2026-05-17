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
        descript: string
    };
    setCard: (id: number, name: string, descript: string) => void;
}

export const useDeployStore = create<DeployState>((set) => ({
    step: {
        active: true,
        number: 1,
    },
    card: {
        id: 0,
        name: '',
        descript: ''
    },
    nextStep: () => set((state) => ({ step: { number: state.step.number + 1, active: true } })),
    prevStep: () => set((state) => ({ step: { number: state.step.number - 1, active: true } })),
    setCard: (id: number, name: string, descript: string) => set((state) => ({ card: { id, name, descript } }))
}));
