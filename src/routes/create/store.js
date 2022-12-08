import { writable } from "svelte/store";

const CreateStore = () => {
    
    const { set, update, subscribe } = writable([]);

    return { 
        subscribe,
        update: (key, question) => update(questionList => questionList[key] = question),
        deleteQuestion: (key) => update(questionList => questionList[key].pop()),
        reset: () => set([]),
    }

}

export const questionList = CreateStore();