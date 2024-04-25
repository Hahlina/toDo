import { TodoList } from 'src/components';

import { useTodos } from 'src/hooks';

export const HomeContent = () => {
    const { activeTodos } = useTodos();
    return <TodoList todos={activeTodos} />;
};
