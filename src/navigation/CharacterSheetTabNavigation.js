import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "../screens/CharacterSheet/MainScreen";
import SkillsScreen from "../screens/CharacterSheet/SkillsScreen";
import HabilitiesScreen from "../screens/CharacterSheet/HabilitiesScreen";
import SpellsScreen from "../screens/CharacterSheet/SpellsScreen";

const BottomTabs = createBottomTabNavigator();

export default CharacterSheetTabNavigator = () => {

    return (
        <NavigationContainer>
            <BottomTabs.Navigator>
                <BottomTabs.Screen name="MainScreen" component={MainScreen}/>
                <BottomTabs.Screen name="SkillsScreen" component={SkillsScreen}/>
                <BottomTabs.Screen name="HabilitiesScreen" component={HabilitiesScreen}/>
                <BottomTabs.Screen name="SpellsScreen" component={SpellsScreen}/>
            </BottomTabs.Navigator>
        </NavigationContainer>
    )
}

