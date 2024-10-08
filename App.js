import {NavigationContainer} from '@react-navigation/native'
import Toats from 'react-native-toast-message'
import {AppNavigation} from './src/navigation/AppNavigation'
import { initFirebase } from "./src/utils";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
      <Toats/>
    </>
  );
}


