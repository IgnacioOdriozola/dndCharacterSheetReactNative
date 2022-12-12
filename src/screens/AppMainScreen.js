import GridItem from "../components/GridItem";


const AppMainScreen = ({navigation}) =>{
    return (
        <>
            <GridItem item={{title:'Campaigns'}} onSelected={()=> navigation.navigate('CampaignListScreen')}/>
            <GridItem item={{title:'Characters'}} onSelected={()=> navigation.navigate('CharacterListScreen')}/>
            <GridItem item={{title:'Compendium'}} onSelected={()=> navigation.navigate('CompendiumScreen')}/>
            <GridItem item={{title:'Items'}} onSelected={()=> navigation.navigate('ItemListScreen')}/>
        </>
    )
}

export default AppMainScreen;