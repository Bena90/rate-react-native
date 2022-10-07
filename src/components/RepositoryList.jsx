import React from "react";
import { FlatList, Text, View } from "react-native";
import repositories from '../data/repositories.js';
import RepositoryItem from "./RepositoryItem.jsx";

const RepositoryList = () => {
    return(
        <FlatList 
            data={repositories}
            ItemSeparatorComponent={() => <Text/>}
            renderItem={({item: repo}) => (
                <RepositoryItem {...repo}/>
            )}
            >

        </FlatList>
    )
}

export default RepositoryList