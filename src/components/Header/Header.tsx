import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, Input, NotificationContent } from 'src/components';

import { useNotification } from 'src/hooks';
import { NOTIFICATION_TITLE, NOTIFICATION_TYPES, TODO_NOTIFICATIONS } from 'src/constants';
import { addTodo } from 'src/store/slices/todo.slice.ts';

import styles from './Header.module.scss';

export const Header = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const dispatch = useDispatch();
    const notify = useNotification();

    const handleAddTodo = () => {
        if (!inputValue) return;
        dispatch(addTodo(inputValue));
        setInputValue('');
        notify(
            <NotificationContent title={NOTIFICATION_TITLE.SUCCESS} body={TODO_NOTIFICATIONS.ADD} />,
            NOTIFICATION_TYPES.SUCCESS
        );
    };

    return (
        <header className={styles.header}>
            <img src="./src/assets/logo.svg" alt="logo" />
            <div className={styles.inputWrapper}>
                <Input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
                <Button onClick={handleAddTodo} disabled={!inputValue}>
                    Add
                </Button>
            </div>
        </header>
    );
};
