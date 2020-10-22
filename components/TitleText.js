import React from 'react'
import { StyleSheet, Text } from 'react-native'

const TitleText = (props) => {
  return (
    <Text {...props} style={{ ...styles.title, ...props.style}}>{props.children}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 25,
    color: 'black'
  }
})

export default TitleText
