import type { FC } from 'react';

import { TodoItem, NotificationContent } from 'src/components';

import { useAppDispatch, useNotification } from 'src/hooks';
import { NOTIFICATION_TITLE, NOTIFICATION_TYPES, TODO_NOTIFICATIONS } from 'src/constants';
import { removeTodo, toggleTodo } from 'src/store/slices/todo.slice.ts';
import type { Todo } from 'src/types';

import styles from './TodoList.module.scss';

interface TodoListProps {
    todos: Todo[];
}

export const TodoList: FC<TodoListProps> = ({ todos }) => {
    const dispatch = useAppDispatch();
    const notify = useNotification();

    const onDelete = (id: string) => {
        dispatch(removeTodo(id));
        notify(
            <NotificationContent title={NOTIFICATION_TITLE.SUCCESS} body={TODO_NOTIFICATIONS.REMOVE} />,
            NOTIFICATION_TYPES.SUCCESS
        );
    };

    const onToggleComplete = (id: string) => {
        dispatch(toggleTodo(id));
        notify(
            <NotificationContent title={NOTIFICATION_TITLE.SUCCESS} body={TODO_NOTIFICATIONS.TOGGLE} />,
            NOTIFICATION_TYPES.SUCCESS
        );
    };

    return (
        <ul className={styles.todoList}>
            {todos?.map((todo) => (
                <TodoItem
                    key={todo.id}
                    text={todo.text}
                    isCompleted={todo.isCompleted}
                    onDelete={() => onDelete(todo.id)}
                    onToggleComplete={() => onToggleComplete(todo.id)}
                />
            ))}
        </ul>
    );
};
