import React from 'react'
import { Image, View, StyleSheet } from "react-native";
import StyledText from './StyledText';
import theme from '../theme';

const RepositoryItemHeader = ({ownerAvatarUrl, fullName, description, language}) => {
  return (
    <View style={{flexDirection:'row', paddingBottom: 2 }}>
        <View style={{flex:0,}}>
            <Image style={styles.image} source={{uri: ownerAvatarUrl}}/>
        </View>
        <View style={{flex:1, paddingLeft: 10}}>
            <StyledText fontSize='subheading' fontWeight='bold'>{fullName}</StyledText>
            <StyledText color='secondary'>{description}</StyledText>
            <StyledText style={styles.language}>{language}</StyledText>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    language: {
        padding: 10,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 5,
        marginBottom: 4,
        marginTop: 4,
        overflow: 'hidden',
    },
    image:{
        width: 48,
        height: 48,
        borderRadius: 5,
    },
})

export default RepositoryItemHeader