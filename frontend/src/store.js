import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// ==============================|| REDUX - MAIN STORE ||============================== //

const middleware = [thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
const persister = 'Free';

export { store, persister };
