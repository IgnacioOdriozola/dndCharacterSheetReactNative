import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppMainScreen from "../screens/AppMainScreen";

const AppNavigator = () => {

    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="AppNavigation" component={AppMainScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;