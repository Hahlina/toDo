import { useAppSelector } from 'src/hooks/store.ts';

export const useTodos = () => {
    const todos = useAppSelector((state) => state.todos.todos);
    const removedTodos = todos.filter((todo) => todo.isRemoved);
    const completedTodos = todos.filter((todo) => todo.isCompleted);
    const activeTodos = todos.filter((todo) => !todo.isRemoved);

    return {
        todos,
        removedTodos,
        completedTodos,
        activeTodos
    };
};
