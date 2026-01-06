// src/store.ts
import { create } from 'zustand';

interface FormElement {
  id: string;
  type: string;
  // Add other properties like label, placeholder, etc. later
}

interface FormState {
  elements: FormElement[];
  addElement: (type: string) => void;
}

const useFormStore = create<FormState>((set) => ({
  elements: [],
  addElement: (type) =>
    set((state) => ({
      elements: [
        ...state.elements,
        {
          id: `${type}-${Date.now()}`, // Simple unique ID
          type,
        },
      ],
    })),
}));

export default useFormStore;
