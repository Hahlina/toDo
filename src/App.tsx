import { useState } from 'react';

import { Header, Container, Statistics, BaseLayout, TodoList } from 'src/components';

export const App = () => {
    const [todos, setTodos] = useState([
        {
            text: 'Todo 1',
            isCompleted: false
        },
        {
            text: 'Todo 2',
            isCompleted: true
        }
    ]);

    return (
        <Container>
            <Header />
            <BaseLayout>
                <Statistics todos={todos} />
                <TodoList todos={todos} />
            </BaseLayout>
        </Container>
    );
};
