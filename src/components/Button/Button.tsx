import styles from './Button.module.scss';

export const Button = () => (
    <button className={styles.button}>
        Create
        <img src="./src/assets/plus.svg" alt="plus" />
    </button>
);
