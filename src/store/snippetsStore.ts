import { create } from "zustand";

interface SnippetState {
    snippetsNames: string[];
    addSnippetName: (name: string) => void;
    setSnippetsNames: (name: string[]) => void;
    selectedSnippet: string | null;
    setSelectedSnippet: (snippet: string) => void;
}

export const useSnippetStore = create<SnippetState>((set) => ({
    snippetsNames: [],
    setSelectedSnippet: (snippet) => set({ selectedSnippet: snippet }),
    selectedSnippet: null,
    addSnippetName: (name) =>
        set((state) => ({
            snippetsNames: [...state.snippetsNames, name]
        })),
    setSnippetsNames: (names) => set({ snippetsNames: names }),
}));
