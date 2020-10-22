import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import BodyText from "../components/BodyText";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";

const GameOverScreen = ({ userChoice, guessRounds, onRestart }) => {
  return (
    <View style={styles.screen}>
      <TitleText style={styles.title}>Game Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/success.png")}
          // source={{uri: 'https://p0.pikist.com/photos/622/113/summit-peak-cliff-rock-slope-travel-travel-destination-swiss-alps-alps.jpg'}}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{guessRounds}</Text> rounds to guess the
          number <Text style={styles.highlight}>{userChoice}</Text>
        </BodyText>
      </View>

      <View style={styles.button}>
      <MainButton onPress={onRestart}>NEW GAME</MainButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: colors.primary,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 30,
    color: colors.primary,
    marginBottom: 30
  },
  highlight: {
    color: colors.primary,
    fontFamily: 'open-sans-bold'
  },
  resultContainer: {
    marginHorizontal: 20,
    marginVertical: 30
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20
  }
});

export default GameOverScreen;
