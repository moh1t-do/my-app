import { atom, selector } from 'recoil';

export const todoAtom = atom({
    key: "todoAtom",
    default: selector({
        key: "todoSelector",
        get: async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            let todos = await response.json();
            todos = todos.slice(0, 10);
            return todos;
        }
    })
});

export const addTodoSelector = selector({
    key: "addTodoSelector",
    get: ({ get }) => {
        const todos = get(todoAtom);
        return todos;
    }
});