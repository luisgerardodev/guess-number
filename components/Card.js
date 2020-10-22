import React from 'react'
import { ImagePropTypes, StyleSheet, View } from 'react-native';

const Card = (props) => {
  return (
    <View style={{...styles.card, ...props.style}}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    // shadow only works on iPhone
    shadowColor: 'black',
    shadowOffset: {height: 0, width: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    // elevation only works on Android
    elevation: 5,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  }
});

export default Card;
