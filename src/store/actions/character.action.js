export const SELECTED_CHARACTER = "SELECTED_CHARACTER";

export const selectedCharacter = (id) => ({
    type: SELECTED_CHARACTER,
    characterID : id
})