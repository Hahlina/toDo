import type { FC, PropsWithChildren } from 'react';

import styles from './Container.module.scss';

export const Container: FC<PropsWithChildren> = ({ children }) => <div className={styles.container}>{children}</div>;
