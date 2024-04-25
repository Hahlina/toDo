import { useTodos } from 'src/hooks';

import styles from './Statistics.module.scss';

export const Statistics = () => {
    const { completedTodos, activeTodos } = useTodos();

    return (
        <div className={styles.statistics_container}>
            <div className={styles.statistics_wrapper}>
                <div className={styles.header_items}>
                    <p className={styles.header_text_todo}>Created tasks</p>
                    <span>{activeTodos.length}</span>
                </div>
                <div className={styles.header_items}>
                    <p className={styles.header_text_completed}>Completed</p>
                    <span
                        className={styles.completed_length}
                    >{`${completedTodos.length} to ${activeTodos.length}`}</span>
                </div>
            </div>
        </div>
    );
};
