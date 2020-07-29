import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducer';

const configureStore = () => (
  createStore(rootReducer, devToolsEnhancer())
);

export default configureStore;