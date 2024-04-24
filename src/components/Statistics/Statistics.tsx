import { useAppSelector } from 'src/hooks';

import styles from './Statistics.module.scss';

export const Statistics = () => {
    const todos = useAppSelector((state) => state.todos.todos);
    const completedTodos = todos.filter((todo) => todo.isCompleted);

    return (
        <div className={styles.statistics_wrapper}>
            <div className={styles.header_items}>
                <p className={styles.header_text_todo}>Created tasks</p>
                <span>{todos.length}</span>
            </div>
            <div className={styles.header_items}>
                <p className={styles.header_text_completed}>Completed</p>
                <span>{`${completedTodos.length} to ${todos.length}`}</span>
            </div>
        </div>
    );
};
