import { FC, PropsWithChildren } from 'react';

import styles from './BaseLayout.module.scss';

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
    return <main className={styles.main}>{children}</main>;
};
