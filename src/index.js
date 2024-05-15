import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { persistor, store } from './redux/store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/events-project-frontend">
        <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
          <ToastContainer />
        </PersistGate>
      </Provider>
</BrowserRouter>
  </React.StrictMode>
);
