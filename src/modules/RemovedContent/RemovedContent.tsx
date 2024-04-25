import { TodoList } from 'src/components';

import { useTodos } from 'src/hooks';

export const RemovedContent = () => {
    const { removedTodos } = useTodos();
    return <TodoList todos={removedTodos} />;
};
