import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class LoginScreen extends React.Component{

    render() {
        return (
            <View style = {styles.container}>
                <Text style={styles.greeting}>{`Hello again. \n Welcome back.`}</Text>
                
                <View style = {styles.errorMessage}>
                    <Text>Error</Text>
                </View>

                <View style = {styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput style={styles.input} autoCapitalize="none"></TextInput>
                    </View>
                </View>

                 <View style = {styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Password from the commit</Text>
                        <TextInput style={styles.input} autoCapitalize="none" underlineColorAndroid="white"></TextInput>
                    </View>
                </View>

            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign:"center"
    },
    errorMessage: {
        marginTop:30,
        alignItems: "center",
        justifyContent: "center",
        
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30,
    },
    inputTitle: {
        color: "grey",
        fontSize: 12,
        textTransform:"uppercase"
    },
    input: {
        borderBottomColor: "grey",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "black",
        
    }

})