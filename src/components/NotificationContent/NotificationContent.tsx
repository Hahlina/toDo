import type { FC, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './NotificationContent.module.scss';

interface INotificationContentProps {
    title: ReactNode;
    body?: ReactNode;
    titleClassName?: string;
    bodyClassName?: string;
}

export const NotificationContent: FC<INotificationContentProps> = ({ title, body, titleClassName, bodyClassName }) => (
    <div className={styles.notificationContent}>
        <h2 className={classNames(styles.title, titleClassName)}>{title}</h2>
        {body && <div className={classNames(styles.body, bodyClassName)}>{body}</div>}
    </div>
);
