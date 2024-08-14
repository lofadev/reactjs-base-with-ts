import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import i18n from './configs/i18n';
import ThemeProvider from './slices/theme/ThemeProvider';
import { store } from './store';
import GlobalStyled from './styles/globalStyled';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <HelmetProvider>
            <BrowserRouter>
              <GlobalStyled />
              <App />
            </BrowserRouter>
          </HelmetProvider>
        </ThemeProvider>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
);
