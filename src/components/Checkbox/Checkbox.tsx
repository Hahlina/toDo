import { forwardRef, type InputHTMLAttributes } from 'react';

import styles from './Checkbox.module.scss';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => (
    <label>
        <input type="checkbox" className={styles.check__input} ref={ref} {...props} />
        <span className={styles.check__box} />
    </label>
));
