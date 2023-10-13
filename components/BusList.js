import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler"; // Import ScrollView
import CommonHeader from "./Header";

export default function BusList() {
  // Dummy bus data
  const dummyBusData = [
    { number: "Bus 101", location: "B1, B2, T6, UB" },
    { number: "Bus 102", location: "B4, N7, UB, B1" },
    { number: "Bus 103", location: "B4, B8, T1" },
    { number: "Bus 104", location: "B2, T5, B1, B3" },
  ];

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
        <View style={styles.listTitle}>
          <Text style={styles.listTitleText}>Choose Transport</Text>
        </View>
        <ScrollView>
          {dummyBusData.map((bus, index) => (
            <View key={index}>
              <View style={styles.smallRectangle}>
                <View style={styles.leftColumn}>
                  <View style={styles.busInfo}>
                    <Image
                      source={require("../assets/bus.png")} // Replace with your bus icon source
                      style={styles.icon}
                    />
                    <Text style={styles.busNumber}>{bus.number}</Text>
                  </View>
                  <View style={styles.locationInfo}>
                    <Image
                      source={require("../assets/location.png")} // Replace with your location icon source
                      style={styles.icon}
                    />
                    <Text style={styles.locationText}>{bus.location}</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.bookButton}>
                  <Text style={styles.bookText}>Book</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.horizontalLine} />{" "}
              {/* Thin horizontal line */}
            </View>
          ))}
        </ScrollView>
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
    marginHorizontal: 20,
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
  listTitle: {
    marginTop: 20,
  },
  listTitleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  smallRectangle: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 40,
  },
  leftColumn: {
    flexDirection: "column",
    flex: 1,
  },
  busInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  busNumber: {
    fontSize: 16,
    color: "black",
    fontWeight: "500",
    marginLeft: 10,
  },
  locationInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 16,
    fontWeight: "500",
    color: "black",
    marginLeft: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  bookButton: {
    backgroundColor: "black",
    width: 100,
    height: 35,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  bookText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
  horizontalLine: {
    borderBottomColor: "#989898",
    borderBottomWidth: 1,
    marginTop: 25,
  },
});
