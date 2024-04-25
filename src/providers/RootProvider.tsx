import type { FC, PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

import { PersistProvider, StoreProvider } from 'src/providers';

export const RootProvider: FC<PropsWithChildren> = ({ children }) => (
    <StoreProvider>
        <PersistProvider>
            {children}
            <ToastContainer />
        </PersistProvider>
    </StoreProvider>
);
