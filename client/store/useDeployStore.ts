import { create } from "zustand";

interface DeployState {
    step: {
        number: number;
        active: boolean;
    };
    nextStep: () => void;
    prevStep: () => void;
    card: number;
    setCard: (id: number) => void;
}

export const useDeployStore = create<DeployState>((set) => ({
    step: {
        active: true,
        number: 1,
    },
    card: 1,
    nextStep: () => set((state) => ({ step: { number: state.step.number + 1, active: true } })),
    prevStep: () => set((state) => ({ step: { number: state.step.number - 1, active: true } })),
    setCard: (id: number) => set(() => ({ card: id }))
}));
