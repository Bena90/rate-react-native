import React from 'react'
import { Text, View } from 'react-native'
import RepositoryList from './RepositoryList.jsx'
import AppBar from './AppBar.jsx'
import { Route, Switch, Redirect } from 'react-router-native'
import Login from '../pages/Login.jsx'


const Main = () => {
  return (
    <View style={{ flex: 1 }}>
        <AppBar />
        <Switch>
            <Route exact path='/'>
                <RepositoryList />
            </Route>
            <Route path='/signin'>
                <Login/>
            </Route>
            <Redirect to='/' />
        </Switch>
    </View>
  )
}
export default Main;