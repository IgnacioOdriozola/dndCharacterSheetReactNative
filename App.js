import { Provider, useDispatch } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import CharacterSheetTabNavigation from './src/navigation/CharacterSheetTabNavigation';
import CharacterListScreen from './src/screens/CharacterListScreen';
import store from './src/store';

export default function App() {

  return (
    <Provider store={store}>
      <CharacterListScreen/>
    </Provider>

  );
}
