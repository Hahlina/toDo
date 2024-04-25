import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Button, Input, NavMenu, NotificationContent, Statistics } from 'src/components';

import { useNotification } from 'src/hooks';
import { APP_ROUTES, NOTIFICATION_TITLE, NOTIFICATION_TYPES, TODO_NOTIFICATIONS } from 'src/constants';
import { addTodo } from 'src/store/slices/todo.slice.ts';

import styles from './Header.module.scss';

export const Header = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const dispatch = useDispatch();
    const notify = useNotification();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleAddTodo = () => {
        if (!inputValue) return;
        if (pathname !== APP_ROUTES.HOME) {
            navigate(APP_ROUTES.HOME);
        }
        dispatch(addTodo(inputValue));
        setInputValue('');
        notify(
            <NotificationContent title={NOTIFICATION_TITLE.SUCCESS} body={TODO_NOTIFICATIONS.ADD} />,
            NOTIFICATION_TYPES.SUCCESS
        );
    };

    return (
        <header className={styles.header}>
            <NavMenu />
            <img src="./src/assets/logo.svg" alt="logo" className={styles.logo} />
            <div className={styles.inputWrapper}>
                <Input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
                <Button onClick={handleAddTodo} disabled={!inputValue}>
                    Add
                </Button>
            </div>
            <Statistics />
        </header>
    );
};
