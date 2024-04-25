import type { FC } from 'react';

import { TodoItem } from 'src/components';

import { useActionsTodo } from 'src/hooks';
import type { Todo } from 'src/types';

import styles from './TodoList.module.scss';

interface TodoListProps {
    todos: Todo[];
}

export const TodoList: FC<TodoListProps> = ({ todos }) => {
    const { onDelete, onToggleComplete } = useActionsTodo();

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
