import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import { screen } from "../utils";
import { RestaurantStack } from './RestaurantsStack';
import { FavoritesStack } from './FavoritesStack';
import { RankingStack } from './RankingStack';
import { SearchStack } from './SearchStack';
import { AccountStack } from './AccountStack';

const Tab = createBottomTabNavigator()
 
export function AppNavigation() { 
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown:false,
          tabBarActiveTintColor: "#00a680",
          tabBarInactiveTintColor: "#646464",
          tabBarIcon: ({ color, size }) => getTabIcon(route, color, size),
        })}
      >
        <Tab.Screen name={screen.restaurant.tab} component={RestaurantStack } options={{
            title: 'Restaurantes'
        }}/>
        <Tab.Screen name={screen.favorites.tab} component={FavoritesStack} options={{
            title: 'Favoritos'
        }}/>
        <Tab.Screen name={screen.ranking.tab} component={RankingStack} options={{
            title: 'Ranking'
        }}/>
        <Tab.Screen name={screen.search.tab} component={SearchStack} options={{title: 'Buscar '}}/>
        <Tab.Screen name={screen.account.tab} component={AccountStack} options={{title:'Cuenta'}}/>
      </Tab.Navigator>
    );
}

const tabIconMap = {
    [screen.restaurant.tab]: 'compass-outline',
    [screen.ranking.tab]: 'star-outline',
    [screen.favorites.tab]: 'heart-outline',
    [screen.search.tab]: 'magnify',
    [screen.account.tab]: 'home-outline',
  };
  
  function getTabIcon(route, color, size) {
    const currentTabIcon = tabIconMap[route.name] || 'help-circle-outline';
  
    return (
      <Icon
        type="material-community"
        name={currentTabIcon}
        color={color}
        size={size}
      />
    );
  }