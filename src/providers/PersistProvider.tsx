import type { FC, PropsWithChildren } from 'react';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor } from 'src/store';

export const PersistProvider: FC<PropsWithChildren> = ({ children }) => (
    <PersistGate persistor={persistor}>{children}</PersistGate>
);
