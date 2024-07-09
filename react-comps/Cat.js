import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

export class Cat extends Component {
  render() {
    return (
        <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Your course goal!" />
          <Button title="Add Goal" />
        </View>
        <View style={styles.goalsContainer}>
          <Text>List of goals...PETER COMES HEREEE  SDDFSF, MAKE IT WORK</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 16
    },
    inputContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc'
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#cccccc',
      width: '70%',
      marginRight: 8,
      padding: 8
    },
    goalsContainer: {
      flex: 5
    }
  });

export default Cat
