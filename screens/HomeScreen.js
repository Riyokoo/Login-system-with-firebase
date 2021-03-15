import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as firebase from 'firebase'
import { TouchableOpacity } from 'react-native-gesture-handler';

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