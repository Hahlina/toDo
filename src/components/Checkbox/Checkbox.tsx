import { FC } from 'react';

import styles from './Checkbox.module.scss';

interface CheckboxProps {
    isCompleted: boolean;
    onToggleComplete: () => void;
}

export const Checkbox: FC<CheckboxProps> = ({ isCompleted, onToggleComplete }) => (
    <label>
        <input type="checkbox" className={styles.check__input} checked={isCompleted} onChange={onToggleComplete} />
        <span className={styles.check__box} onClick={onToggleComplete} />
    </label>
);
