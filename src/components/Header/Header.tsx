import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, Input } from 'src/components';

import { addTodo } from 'src/store/slices/todo.slice.ts';

import styles from './Header.module.scss';

export const Header = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (!inputValue) return;
        dispatch(addTodo(inputValue));
        setInputValue('');
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
