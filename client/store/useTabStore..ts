import { create } from "zustand";

interface TabState {
    currTab: string;
    setTab: (tab: string) => void;
}

export const useTabStore = create<TabState>((set) => ({
    currTab: '',
    setTab: (tab: string) => set(() => ({ currTab: tab }))
}))