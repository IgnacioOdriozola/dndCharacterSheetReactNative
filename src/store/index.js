import { createStore,combineReducers} from 'redux';

import CharacterReducer from './reducers/character.reducer';

const RootReducer = combineReducers({
    characters: CharacterReducer
})

export default createStore(RootReducer);