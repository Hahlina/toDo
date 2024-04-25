import { Outlet } from 'react-router-dom';

import { BaseLayout, Container, Header } from 'src/components';

export const TodoLayout = () => (
    <Container>
        <Header />
        <BaseLayout>
            <Outlet />
        </BaseLayout>
    </Container>
);
