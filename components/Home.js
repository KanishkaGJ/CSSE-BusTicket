import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import CommonHeader from "./Header";
import { db } from "./config";

export default function Home() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Text 1:", text1);
    console.log("Text 2:", text2);
  };

  return (
    <View style={styles.container}>
      <CommonHeader />
      <View style={styles.marginContainer}>
        <View style={styles.rectangle}>
          <Text style={styles.tltJourney}>Enter Your Journey</Text>
          <TextInput
            style={[styles.input, { paddingLeft: 25 }]}
            placeholder="To"
            value={text1}
            onChangeText={setText1}
          />
          <TextInput
            style={[styles.input, { marginTop: 10, paddingLeft: 25 }]}
            placeholder="From"
            value={text2}
            onChangeText={setText2}
          />
          <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
            <Text style={styles.buttonText}>Search Journey</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.smallRectangle}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/coins.png")}
              style={{ width: 120, height: 120 }}
            />
          </View>
         <View style={styles.textContainer}>
            <Text style={styles.smallRectangleText}>My Credit</Text>
            <Text style={styles.smallRectanglePara}>
              Check your credit {"\n"}balance and top up
            </Text>
          </View> 
        </View>
        <View style={styles.smallRectangle}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/train.png")}
              style={{ width: 120, height: 120 }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.smallRectangleText}>My Journeys</Text>
            <Text style={styles.smallRectanglePara}>
              Check your previous {"\n"}journeys
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20, // Add margin to the left and right
  },
  rectangle: {
    height: 347, // Set the height to 347
    width: "100%",
    backgroundColor: "#E2E0E0",
    padding: 20,
    borderRadius: 10,
    marginTop: 30,
  },

  tltJourney: {
    fontSize: 18,
    marginBottom: 30,
    marginTop: 10,
    fontWeight: "500",
  },
  input: {
    width: "100%",
    height: 60,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 30,
    fontSize: 16,
    fontWeight: "500",
  },
  searchBtn: {
    backgroundColor: "black",
    borderRadius: 30,
    height: 60,
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 40,
  },
  textContainer: {
    flex: 3,
    justifyContent: "center",
    marginLeft: 80,
  },
  smallRectangle: {
    height: 163,
    width: "100%",
    backgroundColor: "black",
    marginTop: 20,
    borderRadius: 10,
    flexDirection: "row",
  },
  smallRectangleText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  smallRectanglePara: {
    marginTop: 15,
    fontSize: 14,
    color: "#A3A3A3",
  },
});
