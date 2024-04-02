import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'
import ResultDetails from './src/screens/ResultDetails';
import TestScreen from './src/screens/TestScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultDetails: ResultDetails,
  Test: TestScreen
}, 
{
  initialRouteName: "Search",
  defaultNavigationOptions: {
    title: '',
  }
});

export default createAppContainer(navigator);