import React from 'react'
import { Formik } from 'formik'
import { View, TextInput, Button, StyleSheet} from 'react-native'
import FormikInputValue from '../components/FormikInputValue'
import { loginValidationSchema } from '../validationSchemas/login'


const initialValue = {
    email: '',
    password: '',
}

const Login = () => {
    return (
        <View>
            <Formik 
                initialValues={initialValue} 
                onSubmit={ value=> console.log(value) }
                validationSchema={loginValidationSchema}
            >
                {({ handleChange, handleSubmit, values })=> {
                    return  <View style={styles.form}>
                                <FormikInputValue 
                                    name='email'
                                    placeholder='Email'
                                />
                                <FormikInputValue 
                                    name='password'
                                    placeholder='Password'
                                    in
                                />
                                <Button onPress={handleSubmit} title='Log In'/>
                            </View>
                }}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    form:{
        margin: 10,
    }
})

export default Login