import { forwardRef, type InputHTMLAttributes } from 'react';

import styles from './Input.module.scss';

const InputComponent = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
    return <input type="text" className={styles.input} {...props} ref={ref} />;
});

export const Input = InputComponent;
