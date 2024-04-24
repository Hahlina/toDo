import type { FC, PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

import { StoreProvider } from 'src/providers';

export const RootProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <StoreProvider>
            {children}
            <ToastContainer />
        </StoreProvider>
    );
};
