import { type FC } from 'react';
import cn from 'classnames';

import { Checkbox } from 'src/components';

import styles from './TodoItem.module.scss';

interface TodoItemProps {
    text: string;
    isCompleted: boolean;
    onDelete: () => void;
    onToggleComplete: () => void;
}

export const TodoItem: FC<TodoItemProps> = ({ text, isCompleted, onDelete, onToggleComplete }) => {
    return (
        <li className={cn(styles.todoItem, { [styles.completed]: isCompleted })}>
            <Checkbox checked={isCompleted} onChange={onToggleComplete} />
            {text}
            <div className={styles.trash} onClick={onDelete} />
        </li>
    );
};
