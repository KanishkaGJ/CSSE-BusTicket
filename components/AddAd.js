import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function AddAd() {
    return(
      <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backbtn}>
        <Svg
          width="25" 
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path d="M15.625 18.75L9.375 12.5L15.625 6.25"
            stroke="black"
            strokeWidth={2} // Use 'strokeWidth' instead of 'stroke-width'
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </TouchableOpacity>
      
      <Text style={styles.title}>Add Advertisement</Text>
      
      <TextInput
        style={styles.input}
        placeholder='Ad Type'
        placeholderTextColor='rgba(0, 0, 0, 0.3)'
      />
      
      <TextInput
        style={styles.input}
        placeholder='Price (LKR)'
        placeholderTextColor='rgba(0, 0, 0, 0.3)'
      />
      
      <TextInput
        style={styles.input}
        placeholder='Nearest University'
        placeholderTextColor='rgba(0, 0, 0, 0.3)'
      />
      
      <TextInput
        style={styles.input}
        placeholder='Gender'
        placeholderTextColor='rgba(0, 0, 0, 0.3)'
      />
      
      <TextInput
        style={styles.input}
        placeholder='With or Without food'
        placeholderTextColor='rgba(0, 0, 0, 0.3)'
      />
      
      <TextInput
        style={styles.textArea}
        placeholder='Description'
        placeholderTextColor='rgba(0, 0, 0, 0.3)'
        multiline={true}
        numberOfLines={5}
      />

<TextInput
        style={styles.textArea}
        placeholder='Description'
        placeholderTextColor='rgba(0, 0, 0, 0.3)'
        multiline={true}
        numberOfLines={5}
      />
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
        marginTop: 50,
         marginLeft:16,
         marginRight:16, 
    },
  
    backbtn:{
        alignItems: 'left',
        justifyContent: 'center',
        width: 50,
        height: 50,
        paddingLeft: 12,
        paddingRight: 13,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(217, 217, 217, 0.7)',
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop: 20,

    },
    input:{
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
    textArea:{
      width: '100%',
      height: 175,
      borderColor: 'rgba(0, 0, 0, 0.3)',
      borderWidth: 1,
      marginBottom: 20,
      paddingLeft: 10,
      borderRadius:10,
      color: 'black',
      fontSize: 18,
      textAlignVertical: 'top',
      paddingTop: 20,
    }
})