import React from "react";
import { FlatList, Text, View } from "react-native";
import RepositoryItem from "./RepositoryItem.jsx";
import useRepositories from "../hooks/useRepositories.jsx";

const RepositoryList = () => {
    const {repositories} = useRepositories()

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