import React, { memo } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Suspense } from './components';
import i18n from './configs/i18n';
import { AppRoutes } from './routes';
import { store } from './store';
import { ConfigProvider, GlobalStyled, ThemeProvider } from './styles';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <HelmetProvider>
          <BrowserRouter>
            <ConfigProvider>
              <ThemeProvider>
                <GlobalStyled />
                <React.Suspense fallback={<Suspense />}>
                  <AppRoutes />
                </React.Suspense>
              </ThemeProvider>
            </ConfigProvider>
          </BrowserRouter>
        </HelmetProvider>
      </I18nextProvider>
    </Provider>
  );
};

export default memo(App);
