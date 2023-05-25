import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
  

const AboutScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>About Screen</Text>
           
        </View>
    )
}

export default AboutScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});