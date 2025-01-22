import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React from 'react';

export default function App() {
  const students = [
    {
      image:"https://img.freepik.com/premium-vector/happy-cinderella-princess-illustration_23-2148472532.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid", 
      Name:"Cinderella",
      RollNo:1234,
      Branch:"CSE",
      College:"ACET",
      Email:"1234@acet.ac.in"
      
    },
    {
      image:"https://img.freepik.com/free-vector/cinderella-princess-character-illustration_23-2148459193.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid",
      Name:"Belle",
      RollNo:1235,
      Branch:"AIML",
      College:"ACOE",
      Email:"1235@acet.ac.in"
    },
    {
      image:"https://img.freepik.com/free-vector/hand-drawn-beautiful-mermaid-background_23-2148195825.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid",
      Name:"Ariel",
      RollNo:1236,
      Branch:"ECE",
      College:"AU",
      Email:"1236@acet.ac.in"
    },
    {
      image:"https://img.freepik.com/premium-vector/little-princess-rapunzel-with-long-hair_360341-98.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid",
      Name:"Rapunzel",
      RollNo:1237,
      Branch:"DS",
      College:"ACET",
      Email:"1237@acet.ac.in"
    },
    {
      image:"https://img.freepik.com/free-photo/cute-cartoon-princess-wearing-beautiful-dress_23-2151656446.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid",
      Name:"Elsa",
      RollNo:1238,
      Branch:"IT",
      College:"ACE",
      Email:"1238@acet.ac.in"
    },
    {
      image:"https://img.freepik.com/premium-photo/snow-white-with-apple-her-hand-generative-ai_958124-67829.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid",
      Name:"Snow White",
      RollNo:1239,
      Branch:"MECH",
      College:"ACOE",
      Email:"1239@acet.ac.in"
    },
    {
      image:"https://img.freepik.com/free-vector/fantasy-princess-character-white-background_1308-92687.jpg?ga=GA1.1.63",
      Name:"Sofia",
      RollNo:1240,
      Branch:"IOT",
      College:"AU",
      Email:"1240@acet.ac.in"
    },
    {
      image:"https://img.freepik.com/free-vector/cute-fairy-girl-with-wings-cartoon-character_1308-146602.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid",
      Name:"flos",
      RollNo:1241,
      Branch:"CSE",
      College:"ACET",
      Email:"1241@acet.ac.in"
    }
  ];

  return (
    <View style={styles.parent}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {students.map((student, index) => (
          <View style={styles.child} key={index}>
            <View style={styles.circle}>
              <Image
                source={{ uri: student.image }}
                style={styles.image}
              />
            </View>
            <Text style={styles.text}>Name: {student.Name}</Text>
            <Text style={styles.text}>Roll No: {student.RollNo}</Text>
            <Text style={styles.text}>Branch: {student.Branch}</Text>
            <Text style={styles.text}>College: {student.College}</Text>
            <Text style={styles.text}>Email: {student.Email}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    borderWidth: 8,
    height: "100%",
    width: "100%",
    // borderColor: "skyblue",
    backgroundColor:"#F5BFE0"
  },
  scrollContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  child: {
    height: 350,
    width: 250,
    borderColor: "#F7DFD0",
    borderWidth: 2,
    backgroundColor:"#C8B1DD",
    marginHorizontal: 10,
    borderRadius: 30,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    position: "absolute",
    top: 10,
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: "white",
    borderColor: "#F7DFD0",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 50,
  },
  text: {
    fontSize: 17,
    color: "#F7DFD0",
    marginVertical: 2,
    position:"relative",
    top:30
  },
});
