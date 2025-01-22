import React, { useState } from "react";
import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Entypo";

const App = () => {
  const [isRowVisible, setIsRowVisible] = useState(true);

  const handleToggleVisibility = () => {
    setIsRowVisible(!isRowVisible);
  };

  const buttonData = [
    { id: 1, icon: "home", label: "Programs" },
    { id: 2, icon: "book", label: "Courses" },
    { id: 3, icon: "500px", label: "Drive Ready" },
    { id: 4, icon: "document-landscape", label: "Certifications" },
    { id: 5, icon: "briefcase", label: "Internships" },
    { id: 6, icon: "home", label: "Gen AI" },
    { id: 7, icon: "graduation-cap", label: "Placement" },
    { id: 8, icon: "heart", label: "Favorites" },
    { id: 9, icon: "camera", label: "Camera" },
    { id: 10, icon: "tools", label: "Tools" },
    { id: 11, icon: "map", label: "Map" },
    { id: 12, icon: "adjust", label: "Work" },
  ];

  const rows = [
    buttonData.slice(0, 4),
    buttonData.slice(4, 8),
    buttonData.slice(8, 12),
  ];

  const imageSources = [
    require("./assets/thub.jpg"),
    require("./assets/thub1.jpg"),
    require("./assets/thub2.jpg"),
    require("./assets/thub3.jpg"),
    require("./assets/thub4.jpg"),
  ];

  const renderItem = ({ item }) => (
    <View style={styles.buttonContainer}>
      <View style={styles.button}>
        <Icon name={item.icon} size={25} color="white" style={styles.Icon} />
      </View>
      <Text style={styles.buttonText}>{item.label}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topCenterContainer}>
        <Icon name="home" size={30} color="green" />
        <Text style={styles.text}>TechnicalHub</Text>
      </View>
      <View>
        <Text style={styles.text1}>Welcome, STUDENT</Text>
      </View>
      <View>
        <Image style={styles.Image} source={require("./assets/thub.jpg")} />
      </View>
      <View style={styles.categoriesContainer}>
        <Text style={styles.text2}>Categories</Text>
        <TouchableOpacity onPress={handleToggleVisibility} style={styles.toggleButton}>
          <Icon
            name={isRowVisible ? "chevron-down" : "chevron-up"}
            size={25}
            color="green"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.gridContainer}>
        {rows.map((row, index) => (
          <View key={index} style={styles.row}>
            {isRowVisible || index !== 1 ? (
              <FlatList
                data={row}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={4}
                style={styles.grid}
              />
            ) : null}
          </View>
        ))}
      </View>
      {/* Scrollable Image Section */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {imageSources.map((source, index) => (
          <Image
            key={index}
            style={styles.scrollImage}
            source={source}
          />
        ))}
      </ScrollView>
      <View style={styles.bottomIconsContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="home" size={20} color="green" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="calendar" size={20} color="green" />
          <Text>Event</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="user" size={20} color="green" />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  topCenterContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "green",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 10,
  },
  text1: {
    color: "green",
    fontSize: 17,
    marginRight: 150,
    marginTop: 10,
  },
  text2: {
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 220,
    backgroundColor: "#f0f0f0",
  },
  Image: {
    width: 350,
    height: 150,
    backgroundColor: "#f0f0f0",
    marginTop: 10,
    borderRadius: 20,
  },
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  gridContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "relative",
    top:70
  },
  row: {
    flexDirection: "row",
    marginVertical: 5,
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 23,
  },
  buttonText: {
    color: "green",
    fontSize: 12,
    marginTop: 5,
    marginLeft: 15,
  },
  toggleButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "green",
    padding: 5,
    borderRadius: 50,
    marginLeft: 30,
    position: "absolute",
    left: 280,
  },
  scrollContainer: {
    paddingHorizontal: 10,
    marginTop: 20,
    position:"relative",
    top:110
  },
  scrollImage: {
    width: 250,
    height: 120,
    marginHorizontal: 10,
    borderRadius: 20,
    marginTop:5
  },
  bottomIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    // padding: 15,
    position: "absolute",
    bottom: 1,
    fontSize:10
    // backgroundColor: "#f0f0f0",
    // borderTopWidth: 1,
    // borderTopColor: "green",
  },
  iconContainer: {
    alignItems: "center",
  },
});

export default App;
