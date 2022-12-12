import { FlatList} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import GridItem from "../components/GridItem";
import CharacterSheetTabNavigation from "../navigation/CharacterSheetTabNavigation";
import { selectedCharacter, SELECTED_CHARACTER } from "../store/actions/character.action";

const CharacterListScreen = () => {
    const characters = useSelector((state)=> state.characters.characters);
    const selectedCha = useSelector((state) => state.characters)
    const dispatch = useDispatch();

    const handleSelectedCharacter = (char) => {
        dispatch(selectedCharacter(char.id))
    }

    if(!!selectedCha.selected){
        return (<CharacterSheetTabNavigation/>);
    }

    const renderGridItem = ({ item }) => (
        <GridItem item={item} onSelected={handleSelectedCharacter} />
      );
    
      
    return (
        <FlatList
            data={characters}
            keyExtractor={(character) => character.id}
            renderItem={renderGridItem}
        />
    )
}

export default CharacterListScreen;