import { createBrowserRouter } from 'react-router-dom';

import { ActiveTodoContent, RemovedTodoContent, CompletedTodoContent, TodoLayout } from 'src/modules';

import { APP_ROUTES } from 'src/constants';

export const router = createBrowserRouter([
    {
        path: APP_ROUTES.HOME,
        element: <TodoLayout />,
        children: [
            {
                path: APP_ROUTES.HOME,
                element: <ActiveTodoContent />
            },
            {
                path: APP_ROUTES.REMOVED,
                element: <RemovedTodoContent />
            },
            {
                path: APP_ROUTES.COMPLETED,
                element: <CompletedTodoContent />
            }
        ]
    }
]);
