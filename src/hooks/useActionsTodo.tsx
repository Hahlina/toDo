import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { NotificationContent } from 'src/components';

import { useNotification } from 'src/hooks';
import { APP_ROUTES, NOTIFICATION_TITLE, NOTIFICATION_TYPES, TODO_NOTIFICATIONS } from 'src/constants';
import { addTodo, removeTodo, toggleTodo } from 'src/store/slices/todo.slice.ts';

export const useActionsTodo = () => {
    const dispatch = useDispatch();
    const notify = useNotification();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const onAddTodo = useCallback((inputValue: string) => {
        if (!inputValue) return;
        if (pathname !== APP_ROUTES.HOME) {
            navigate(APP_ROUTES.HOME);
        }
        dispatch(addTodo(inputValue));
        notify(
            <NotificationContent title={NOTIFICATION_TITLE.SUCCESS} body={TODO_NOTIFICATIONS.ADD} />,
            NOTIFICATION_TYPES.SUCCESS
        );
    }, []);

    const onDelete = useCallback((id: string) => {
        dispatch(removeTodo(id));
        notify(
            <NotificationContent title={NOTIFICATION_TITLE.SUCCESS} body={TODO_NOTIFICATIONS.REMOVE} />,
            NOTIFICATION_TYPES.SUCCESS
        );
    }, []);

    const onToggleComplete = useCallback((id: string) => {
        dispatch(toggleTodo(id));
        notify(
            <NotificationContent title={NOTIFICATION_TITLE.SUCCESS} body={TODO_NOTIFICATIONS.TOGGLE} />,
            NOTIFICATION_TYPES.SUCCESS
        );
    }, []);

    return {
        onAddTodo,
        onDelete,
        onToggleComplete
    };
};
