import { useCallback } from 'react';
import { toast, ToastContent, ToastOptions, TypeOptions } from 'react-toastify';

import { NOTIFICATION_TYPES } from 'src/constants';

export enum POSITION_TYPES {
    bottomCenter = 'bottom-center',
    bottomLeft = 'bottom-left',
    bottomRight = 'bottom-right',
    topCenter = 'top-center',
    topLeft = ' top-left',
    topRight = 'top-right'
}
const defaultConfig: ToastOptions = {
    autoClose: 1500,
    closeOnClick: true,
    data: {},
    draggable: true,
    hideProgressBar: false,
    pauseOnHover: true,
    position: POSITION_TYPES.bottomRight
};

export const useNotification = () =>
    useCallback(
        (content: ToastContent, type: TypeOptions = NOTIFICATION_TYPES.INFO, config?: ToastOptions) =>
            toast(content, {
                ...defaultConfig,
                ...config,
                type,
                className: `toast ${type}-toast`,
                progressClassName: `progress ${type}-progress`
            }),
        []
    );
