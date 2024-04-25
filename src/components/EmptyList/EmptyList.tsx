import styles from './EmptyList.module.scss';

export const EmptyList = () => (
    <div className={styles.wrapper}>
        <img src="/assets/checkList.svg" width={300} height={300} alt="empty list" />
        <p className={styles.text}>It looks like you don't have todo in this category</p>
    </div>
);
