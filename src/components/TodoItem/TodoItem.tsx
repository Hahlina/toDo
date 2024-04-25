import { type FC } from 'react';
import cn from 'classnames';

import { Checkbox } from 'src/components';

import styles from './TodoItem.module.scss';

interface TodoItemProps {
    text: string;
    isCompleted: boolean;
    isRemoved: boolean;
    onDelete: () => void;
    onToggleComplete: () => void;
    onRestore: () => void;
}

export const TodoItem: FC<TodoItemProps> = ({
    text,
    isCompleted,
    isRemoved,
    onDelete,
    onToggleComplete,
    onRestore
}) => (
    <li className={cn(styles.todoItem, { [styles.completed]: isCompleted })}>
        <Checkbox checked={isCompleted} onChange={onToggleComplete} />
        {text}
        <div className={cn(styles.trash, { [styles.restore]: isRemoved })} onClick={isRemoved ? onRestore : onDelete} />
    </li>
);
