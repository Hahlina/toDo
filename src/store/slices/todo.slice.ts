import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Todo = {
    id: string;
    text: string;
    isCompleted: boolean;
    isRemoved: boolean;
};

type TodoState = {
    todos: Todo[];
};

const initialState: TodoState = {
    todos: []
};
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.todos.unshift({
                id: new Date().toISOString(),
                text: action.payload.trim(),
                isCompleted: false,
                isRemoved: false
            });
        },
        toggleTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo
            );
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.map((todo) => (todo.id === action.payload ? { ...todo, isRemoved: true } : todo));
        },
        restoreTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload ? { ...todo, isRemoved: false } : todo
            );
        }
    }
});

export const { addTodo, toggleTodo, removeTodo, restoreTodo } = todoSlice.actions;

export default todoSlice.reducer;
