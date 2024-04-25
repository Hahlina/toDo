import { Outlet } from 'react-router-dom';

import { BaseLayout, Container } from 'src/components';
import { Header } from 'src/modules';

export const TodoLayout = () => (
    <Container>
        <Header />
        <BaseLayout>
            <Outlet />
        </BaseLayout>
    </Container>
);
