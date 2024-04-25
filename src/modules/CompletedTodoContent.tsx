import { TodoList } from 'src/components';

import { useTodos } from 'src/hooks';

export const CompletedTodoContent = () => {
    const { completedTodos } = useTodos();
    return <TodoList todos={completedTodos} />;
};
