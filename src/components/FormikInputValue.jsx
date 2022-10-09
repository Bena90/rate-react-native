import { useField } from 'formik'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import StyledText from './StyledText'
import StyleTextInput from './StyledTextInput'



const FormikInputValue = ({ name, ...props }) => {

    const [ field, meta, helpers ] = useField(name)
    
    return (
        <>
            {meta.error && <StyledText error={meta.error} style={styles.error}> {meta.error} </StyledText>}
            <StyleTextInput 
                values={field.value}
                onChangeText={value=> helpers.setValue(value)}
                {...props}
            />
        </>
  )
}

const styles = StyleSheet.create({
    error: {
        color: 'red',

    }
})

export default FormikInputValue