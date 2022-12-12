import { StyleSheet, Text, View, Pressable, Image ,Button} from "react-native";
import { useSelector, useDispatch, connect } from "react-redux";
import { selectedCharacter } from "../../store/actions/character.action";

const MainScreen = () => {
  const selectedCha = useSelector((state) => state.characters);
  const dispatch = useDispatch()
  
  const cleanSelectedCharacter = () => {
    dispatch(selectedCharacter(-1))
  }

    return (
    <View >
      <View >
        <Text >{selectedCha.selected.name}</Text>
        <Text >{selectedCha.selected.description}</Text>
        <Button title="Back" onPress={cleanSelectedCharacter}></Button>
      </View>
    </View>
    )
}

export default connect()(MainScreen);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    screen: {
      flex: 0.9,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 25,
    },
    description: {
      fontSize: 20,
    },
    price: {
      fontSize: 40,
    },
    button: {
      marginTop: 15,
    },
  });