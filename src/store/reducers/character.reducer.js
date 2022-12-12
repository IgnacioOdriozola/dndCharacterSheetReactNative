import { SELECTED_CHARACTER } from "../actions/character.action";
import { CHARACTERS } from "../../data/characters";

const initialState = {
    characters: CHARACTERS,
    selected:null
}

const CharacterReducer = (state = initialState,action) => {
    switch(action.type){
        case SELECTED_CHARACTER:
            const IndexCharacter = state.characters.findIndex(
                (cha)=> cha.id === action.characterID 
            )
            if(IndexCharacter === -1) return state;
            return {...state,selected: state.characters[IndexCharacter]}
    }

    return state;
}

export default CharacterReducer;