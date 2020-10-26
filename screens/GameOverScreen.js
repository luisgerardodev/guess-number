import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import BodyText from "../components/BodyText";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";

const GameOverScreen = ({ userChoice, guessRounds, onRestart }) => {
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get("window").width
  );
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceWidth(Dimensions.get("window").width);
      setAvailableDeviceHeight(Dimensions.get("window").height);
    };
    Dimensions.addEventListener("change", updateLayout);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  return (
      <ScrollView>
        <View style={styles.screen}>
          <TitleText
            style={{ ...styles.title, marginBottom: availableDeviceHeight / 30 }}
          >
            Game Over!
          </TitleText>
          <View
            style={{
              ...styles.imageContainer,
              ...{
                width:
                  availableDeviceWidth > 500
                    ? availableDeviceWidth * 0.4
                    : availableDeviceWidth * 0.7,
                height:
                  availableDeviceWidth > 500
                    ? availableDeviceWidth * 0.4
                    : availableDeviceWidth * 0.7,
                borderRadius: (availableDeviceWidth * 0.7) / 2,
                marginVertical: availableDeviceHeight / 30,
              },
            }}
          >
            <Image
              style={styles.image}
              source={require("../assets/success.png")}
              // source={{uri: 'https://p0.pikist.com/photos/622/113/summit-peak-cliff-rock-slope-travel-travel-destination-swiss-alps-alps.jpg'}}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              ...styles.resultContainer,
              marginVertical: availableDeviceHeight / 60,
            }}
          >
            <BodyText
              style={{
                ...styles.resultText,
                fontSize: availableDeviceHeight < 400 ? 16 : 20,
              }}
            >
              Your phone needed{" "}
              <Text style={styles.highlight}>{guessRounds}</Text> rounds to guess
              the number <Text style={styles.highlight}>{userChoice}</Text>
            </BodyText>
          </View>
          <View style={styles.button}>
            <MainButton onPress={onRestart}>NEW GAME</MainButton>
          </View>
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: colors.primary,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 30,
    color: colors.primary,
  },
  highlight: {
    color: colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    marginHorizontal: 30,
  },
  resultText: {
    textAlign: "center",
  },
});

export default GameOverScreen;
