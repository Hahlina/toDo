import type { FC } from 'react';

import { EmptyList, TodoItem } from 'src/components';

import { useActionsTodo } from 'src/hooks';
import type { Todo } from 'src/types';

import styles from './TodoList.module.scss';

interface TodoListProps {
    todos: Todo[];
}

export const TodoList: FC<TodoListProps> = ({ todos }) => {
    const { onDelete, onToggleComplete, onRestore } = useActionsTodo();

    if (!todos.length) return <EmptyList />;

    return (
        <ul className={styles.todoList}>
            {todos?.map((todo) => (
                <TodoItem
                    key={todo.id}
                    text={todo.text}
                    isCompleted={todo.isCompleted}
                    isRemoved={todo.isRemoved}
                    onRestore={() => onRestore(todo.id)}
                    onDelete={() => onDelete(todo.id)}
                    onToggleComplete={() => onToggleComplete(todo.id)}
                />
            ))}
        </ul>
    );
};
