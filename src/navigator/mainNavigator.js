import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList88983Navigator from '../features/NotificationList88983/navigator';
import Settings88982Navigator from '../features/Settings88982/navigator';
import Settings88974Navigator from '../features/Settings88974/navigator';
import UserProfile88972Navigator from '../features/UserProfile88972/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList88983: { screen: NotificationList88983Navigator },
Settings88982: { screen: Settings88982Navigator },
Settings88974: { screen: Settings88974Navigator },
UserProfile88972: { screen: UserProfile88972Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
