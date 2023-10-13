import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView} from 'react-native';

export default function Signup() {
    return(
        <View style={styles.container}>

        <ScrollView contentContainerStyle={styles.scrollContainer}>

        <Text style={styles.title}>Get Started</Text>
        <Text style={styles.para}>Create your account to be a part of the community</Text>
      <TextInput
        style={styles.input}
        placeholder='Name'
        placeholderTextColor='rgba(0, 0, 0, 0.3)'
      />


      <TextInput
        style={styles.input}
        placeholder='Email Address'
        placeholderTextColor='rgba(0, 0, 0, 0.3)'
      />

    <TextInput
        style={styles.input}
        placeholder='Phone Number'
        placeholderTextColor='rgba(0, 0, 0, 0.3)'
        keyboardType='numeric'
      />

    <TextInput
        style={styles.input}
        placeholder='Gender'
        placeholderTextColor='rgba(0, 0, 0, 0.3)'
      />

    <TextInput
        style={styles.input}
        placeholder='Password'
        placeholderTextColor='rgba(0, 0, 0, 0.3)'
        secureTextEntry={true}
      />

    <TextInput
        style={styles.input}
        placeholder='Re-type Password'
        placeholderTextColor='rgba(0, 0, 0, 0.3)'
        secureTextEntry={true}
      />
      </ScrollView>
   
      <View style={styles.buttonContainer}>
        <Button
          title="Submit"
          color="#3059EB"
        />
      </View>
    </View>
    )

    
}

const styles = StyleSheet.create({
    container: {
    marginTop: 100,
     marginLeft:16,
     marginRight:16,
      
    },
    scrollContainer:{
      flexGrow: 1,
    justifyContent: 'center',
    alignItems: '',
    },
   title:{
    fontSize: 25,
   },
   para:{
    marginTop:8,
    marginBottom: 30,
    fontSize: 16,
    
   },
    input: {
      width: '100%',
      height: 69,
      borderColor: 'rgba(0, 0, 0, 0.3)',
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
      borderRadius:10,
      color: 'black',
      fontSize: 18,
    },

    buttonContainer:{
      width: '100%',
      padding: 3,
      backgroundColor: 'white',

    }
    
  });