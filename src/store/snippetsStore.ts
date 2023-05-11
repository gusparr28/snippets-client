import { create } from "zustand";

interface SnippetState {
    snippetsNames: string[]
    addSnippetName: (name: string) => void;
    setSnippetsNames: (name: string[]) => void;
}

export const useSnippetStore = create<SnippetState>((set) => ({
    snippetsNames: [],
    addSnippetName: (name) =>
        set((state) => ({
            snippetsNames: [...state.snippetsNames, name]
        })),
    setSnippetsNames: (names) => set({ snippetsNames: names }),
}));