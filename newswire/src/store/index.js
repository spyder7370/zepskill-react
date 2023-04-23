import { createStore, applyMiddleware, compose } from 'redux';
import PromiseMiddleware from 'redux-promise';
import appReducers from './reducers/index';

const ReduxStore = () => {
	const webToolEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const middlewareEnhancers = applyMiddleware(PromiseMiddleware);
	const composedEnhancers = webToolEnhancers(middlewareEnhancers);
	const store = createStore(appReducers, composedEnhancers);
	return store;
};

export default ReduxStore;
