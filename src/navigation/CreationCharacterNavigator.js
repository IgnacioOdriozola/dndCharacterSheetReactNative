import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";

const Stack = createNativeStackNavigator();

export default CreationCharacterNavigator = () => {
    return(
        <View>
            <Text>Prueba character navigator</Text>
        </View>
    )
  /* return (
    <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
            headerStyle: { backgroundColor: COLORS.primary },
            headerTintColor: COLORS.secondary,
            headerTitleStyle: {
                fontWeight: "bold",
                },
            }}
            >
            <Stack.Screen
                name="Atributes"
                component={CampaignListScreen}
                options={{
                    title: "Name, Lineaje and class",
                }}
                />
            <Stack.Screen
                name="Habilities"
                component={CharacterListScreen}
                options={({ route }) => ({
                    title: route.params.name,
                })}
                />
            <Stack.Screen
                name="Background"
                component={BreadDetailsScreen}
                options={({ route }) => ({
                    title: route.params.name,
                })}
                />
        </Stack.Navigator>
    </NavigationContainer>
  ); */
};
