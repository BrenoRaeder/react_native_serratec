import 'react-native-gesture-handler';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { DataProvider } from './context/DataContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
      <DataProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </DataProvider>
  );
}

export default App;
