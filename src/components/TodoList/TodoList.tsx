import { FC } from 'react';

import { TodoItem } from 'src/components';

import styles from './TodoList.module.scss';

interface TodoListProps {
    todos: {
        text: string;
        isCompleted: boolean;
    }[];
}

export const TodoList: FC<TodoListProps> = ({ todos }) => (
    <ul className={styles.todoList}>
        {todos.map((todo, index) => (
            <TodoItem
                key={index}
                text={todo.text}
                isCompleted={todo.isCompleted}
                onDelete={() => {}}
                onToggleComplete={() => {}}
            />
        ))}
    </ul>
);
