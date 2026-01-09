import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/screen/RootNavigation';
import { ThemeProvider } from './src/context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootNavigation/>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;