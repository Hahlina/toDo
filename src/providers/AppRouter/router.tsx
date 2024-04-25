import { createBrowserRouter } from 'react-router-dom';

import { TodoLayout } from 'src/components';
import { HomeContent, RemovedContent, CompletedContent } from 'src/modules';

import { APP_ROUTES } from 'src/constants';

export const router = createBrowserRouter([
    {
        path: APP_ROUTES.HOME,
        element: <TodoLayout />,
        children: [
            {
                path: APP_ROUTES.HOME,
                element: <HomeContent />
            },
            {
                path: APP_ROUTES.REMOVED,
                element: <RemovedContent />
            },
            {
                path: APP_ROUTES.COMPLETED,
                element: <CompletedContent />
            }
        ]
    }
]);
