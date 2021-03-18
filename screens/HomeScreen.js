import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as firebase from 'firebase'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createAppContainer,NavigationActions  } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import {Feather,SimpleLineIcons, FontAwesome5} from '@expo/vector-icons'


import PersonalData from './PersonalData'
import Profile from './Profile'
import Logout from '../components/Logout'


const AppDrawerNavigator = createDrawerNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: {
            title: "Profil",
            drawerIcon:({tintColor}) => <Feather name = "user" size = {16} color = {tintColor}></Feather>
        }
    },
    PersonalData: {
        screen: PersonalData,
        navigationOptions: {
            title: "Date medicale",
            drawerIcon:({tintColor}) => <FontAwesome5 name="book-medical" size={24} color="black" />
        }
    },    
    Logout: {
        screen: Logout,
        navigationOptions: {
            title: "Log out",
            drawerIcon:({tintColor}) => <SimpleLineIcons name="logout" size={24} color={tintColor} ></SimpleLineIcons>
        }
    },
})



const HomeScreen = createAppContainer(AppDrawerNavigator);

export default HomeScreen;

/*
import {
    Profil,
    DatePersonale,
    MedicalData,
  
} from '../screens';

const DrawerNavigator = createDrawerNavigator({
    Profil,
    DatePersonale,
    MedicalData,
    
});


export default createAppContainer(DrawerNavigator);

export default class HomeScreen extends React.Component{


    

    state = {
        email: "",
        displayName:""
    }

    componentDidMount() {
        
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
    }

    signOutUser = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
            <View style = {styles.container}>
                <Text>Bine ai venit, {this.state.displayName} !</Text>

                <TouchableOpacity style={styles.LogOut} onPress = {this.signOutUser}>
                    <Text style = {{color:"#E9446A"}}>Logout</Text>
                </TouchableOpacity>

               
            </View>
        )
    }
}
*/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    },
    LogOut: {
        marginTop: 32,
    }
})
