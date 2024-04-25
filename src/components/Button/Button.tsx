import { forwardRef, type ButtonHTMLAttributes } from 'react';

import styles from './Button.module.scss';

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
    ({ children, ...props }, ref) => (
        <button className={styles.button} {...props} ref={ref}>
            {children}
        </button>
    )
);

export const Button = ButtonComponent;
