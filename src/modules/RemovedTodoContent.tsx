import { TodoList } from 'src/components';

import { useTodos } from 'src/hooks';

export const RemovedTodoContent = () => {
    const { removedTodos } = useTodos();
    return <TodoList todos={removedTodos} />;
};
