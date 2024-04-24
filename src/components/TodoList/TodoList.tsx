import { TodoItem } from 'src/components';

import { useAppDispatch, useAppSelector } from 'src/hooks';
import { removeTodo, toggleTodo } from 'src/store/slices/todo.slice.ts';

import styles from './TodoList.module.scss';

export const TodoList = () => {
    const todos = useAppSelector((state) => state.todos.todos);
    const dispatch = useAppDispatch();

    const onDelete = (id: string) => dispatch(removeTodo(id));
    const onToggleComplete = (id: string) => dispatch(toggleTodo(id));

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
