import React from "react";
import { StyleSheet, View } from "react-native";
import RepositoryStats from "./RepositoryStats";
import RepositoryItemHeader from "./RepositoryItemHeader";

const RepositoryItem = (props) => {
    
    return (
        <View key={props.id} style={styles.container}>
            <RepositoryItemHeader {...props} />
            <RepositoryStats {...props} />
        </View>
        )
    }
    
const styles = StyleSheet.create({
    container: {
        padding:20,
        paddingBottom: 5,
        paddingTop: 5,
    },
    image:{
        width: 48,
        height: 48,
        borderRadius: 5,
    },
    });

export default RepositoryItem