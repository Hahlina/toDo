import ReactDOM from 'react-dom/client';

import { App } from './App.tsx';

import { RootProvider } from 'src/providers';

import 'src/styles/settings.scss';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RootProvider>
        <App />
    </RootProvider>
);
