import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Users from './pages/Users';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    Users,
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: '#7159c1'
      },
      headerTintColor: '#fff',
    }
  })
)

export default Routes;
