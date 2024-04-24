import type { FC, PropsWithChildren } from 'react';

import { StoreProvider } from 'src/providers';

export const RootProvider: FC<PropsWithChildren> = ({ children }) => {
    return <StoreProvider>{children}</StoreProvider>;
};
