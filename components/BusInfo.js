import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function BusInfo() {
  // Dummy bus station and time data
  const dummyStations = [
    { station: "Station B2", time: "10:00 AM, 11:00 AM, 12.15 PM" },
    { station: "Station B3", time: "10:00 AM, 11:00 AM" },
    { station: "Station T1", time: "11.15 AM, 1.30PM" },
    { station: "Station B4", time: "10:00 AM, 11:00 AM, 12.15 PM" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Book Ticket</Text>
      </View>
      <View style={styles.marginContainer}>
        <View style={styles.rectangle}>
          <Text style={styles.infoText}>Bus Number: Bus 101</Text>
          <Text style={styles.infoText}>From: Location A</Text>
          <Text style={styles.infoText}>To: Location B</Text>
          <Text style={styles.infoText}>Price: $20.00</Text>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookText}>Book Journey</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.stationList}>
          <Text style={styles.stationListTitle}>Bus Stations and Times</Text>
          {dummyStations.map((station, index) => (
            <Text key={index} style={styles.stationItem}>
              {station.station} - {station.time}
            </Text>
          ))}
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
    marginHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  backButton: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#E2E0E0",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "500",
    marginLeft: 10,
  },
  rectangle: {
    height: 265,
    width: "100%",
    backgroundColor: "#E2E0E0",
    padding: 20,
    borderRadius: 10,
    marginTop: 30,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 5,
    marginTop: 5,
  },
  bookButton: {
    backgroundColor: "black",
    borderRadius: 30,
    height: 60,
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  bookText: {
    color: "white",
    fontSize: 16,
  },
  stationList: {
    marginTop: 30,
    marginBottom: 20,
  },
  stationListTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  stationItem: {
    fontSize: 16,
    marginBottom: 30,
    fontWeight: "500",
  },
});
