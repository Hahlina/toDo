import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from 'src/store';

import { App } from './App.tsx';

import 'src/styles/settings.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>
);
