import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import getInitState from './redux/state';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/rootReducer';
import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'


 const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, getInitState(), composeWithDevTools())
const persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} >
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
