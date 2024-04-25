import { TodoList } from 'src/components';

import { useTodos } from 'src/hooks';

export const CompletedContent = () => {
    const { completedTodos } = useTodos();
    return <TodoList todos={completedTodos} />;
};
