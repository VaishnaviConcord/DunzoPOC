import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Navigation from "./Navigation";
import Login from "./Login";
import Home from "./Home";
import NewDelivery from "./NewDelivery"
import GetOTP from "./GetOTP";
import Verification from "./Verification";
import Register from "./Register";

const Stack = createStackNavigator();

export const routes = {
  Login: Login,
  Home:Home,
  NewDelivery:NewDelivery,
  Navigation: Navigation,
  Register:Register,
  GetOTP:GetOTP,
  Verification:Verification,
};

const Router = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Navigation"
    >
      {Object.keys(routes).map((each, index) => {
        return (
          <Stack.Screen key={index} name={each} component={routes[each]} />
        );
      })}
    </Stack.Navigator>
  </NavigationContainer>
);

export default Router;
