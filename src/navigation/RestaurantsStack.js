import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { RestauransScreen } from "../screens/Restaurants/RestaurantsScreen";
import { AddRestaurantsScreen } from "../screens/Restaurants/AddRestaurantsScreen";

 const Stack = createNativeStackNavigator() 

 export function RestaurantStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={screen.restaurant.restaurants}
          component={RestauransScreen}
          options={{ title: "Restaurantes" }}
        />
        <Stack.Screen
          name={screen.restaurant.addRestaurant}
          component={AddRestaurantsScreen}
          options={{ title: "Nuevo estaurante" }}
        />
      </Stack.Navigator>
    );
 }
