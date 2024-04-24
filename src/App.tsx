import { Header, Container, Statistics, BaseLayout, TodoList } from 'src/components';

export const App = () => (
    <Container>
        <Header />
        <BaseLayout>
            <Statistics />
            <TodoList />
        </BaseLayout>
    </Container>
);
