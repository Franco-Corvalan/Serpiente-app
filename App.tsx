import "react-native-gesture-handler";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Game from './components/Game';


export default function App():JSX.Element {
  return (
    <GestureHandlerRootView style={{flex:1 ,backgroundColor:"gray"}}>
      <Game/>
    </GestureHandlerRootView>
    
  );
}

