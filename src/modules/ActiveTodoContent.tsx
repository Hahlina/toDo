import { TodoList } from 'src/components';

import { useTodos } from 'src/hooks';

export const ActiveTodoContent = () => {
    const { activeTodos } = useTodos();
    return <TodoList todos={activeTodos} />;
};
