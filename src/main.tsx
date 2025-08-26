import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import store from './redux/store.ts';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store.ts';

const materialTheme = createTheme({
  palette: {
    mode: 'dark',
    primary:{main:"#fff"},
    secondary:{main:"rgb(105,105,105)"},
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <ThemeProvider theme={materialTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
    </PersistGate>
    </Provider>
  </StrictMode>,
)
