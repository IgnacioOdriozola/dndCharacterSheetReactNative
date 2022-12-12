import { StyleSheet, Text, View, Pressable, Modal ,Button} from "react-native";
import { useSelector } from "react-redux";

export default HabilitiesScreen = () => {
    const character = useSelector((state)=> state.characters.characters)
    return (
        <View>
            <Text>Componente de prueba para Habilidades</Text>
        </View> 
    )
}