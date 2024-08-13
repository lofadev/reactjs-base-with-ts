import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import ThemeProvider from './slices/theme/ThemeProvider';
import { store } from './store';
import GlobalStyled from './styles/globalStyled';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <GlobalStyled />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
