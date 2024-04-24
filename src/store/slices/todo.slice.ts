import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Todo = {
    id: string;
    text: string;
    isCompleted: boolean;
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
                isCompleted: false
            });
        },
        toggleTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo
            );
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        }
    }
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
