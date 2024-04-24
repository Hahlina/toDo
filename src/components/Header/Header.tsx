import { FC, PropsWithChildren } from 'react';

import { Button, Input } from 'src/components';

import styles from './Header.module.scss';

export const Header: FC<PropsWithChildren> = () => (
    <header className={styles.header}>
        <img src="./src/assets/logo.svg" alt="logo" />
        <div className={styles.inputWrapper}>
            <Input />
            <Button />
        </div>
    </header>
);
