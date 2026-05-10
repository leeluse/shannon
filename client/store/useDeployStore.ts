import { create } from "zustand";

interface DeployState {
    step: {
        number: number;
        active: boolean;
    };
    nextStep: () => void;
    prevStep: () => void;

}

export const useDeployStore = create<DeployState>((set) => ({
    step: {
        active: true,
        number: 1,
    },
    nextStep: () => set((state) => ({ step: { number: state.step.number + 1, active: true } })),
    prevStep: () => set((state) => ({ step: { number: state.step.number - 1, active: true } })),
}));
