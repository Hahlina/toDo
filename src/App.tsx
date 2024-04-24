import { Header, Container, BaseLayout, TodoList } from 'src/components';

export const App = () => (
    <Container>
        <Header />
        <BaseLayout>
            <TodoList />
        </BaseLayout>
    </Container>
);
