import { useState, type KeyboardEvent } from 'react';

import { Button, Input } from 'src/components';
import { NavMenu, Statistics } from './conponents/';

import { useActionsTodo } from 'src/hooks';

import styles from './Header.module.scss';

export const Header = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const { onAddTodo } = useActionsTodo();

    const handleAddTodo = () => {
        onAddTodo(inputValue);
        setInputValue('');
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleAddTodo();
            setInputValue('');
        }
    };

    return (
        <header className={styles.header}>
            <NavMenu />
            <img src="/assets/logo.svg" alt="logo" className={styles.logo} />
            <div className={styles.inputWrapper}>
                <Input
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <Button onClick={handleAddTodo} disabled={!inputValue}>
                    Add
                    <img src="/assets/plus.svg" alt="plus" />
                </Button>
            </div>
            <Statistics />
        </header>
    );
};
