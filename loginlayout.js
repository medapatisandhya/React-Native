import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
// import Icon from 'react-native-vector-icons/AntDesign';

const CenteredImage = () => {
  const myIcon = <Icon name="facebook-with-circle" size={50} color="blue" />;
  const myIcon1 = <Icon name="google--with-circle" size={50} color="brown" />;
  const myIcon2 = <Icon name="linkedin-with-circle" size={50} color="#0073B0" />;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://img.freepik.com/free-vector/appointment-booking-with-smartphone_23-2148557939.jpg?ga=GA1.1.639928877.1718960180&semt=ais_hybrid',
        }}
        style={styles.image}
      />
      <Text style={styles.h1}>Hello</Text>
      <Text style={styles.text}>Welcome To Little Drop, where</Text>
      <Text style={styles.text}>you manage your daily tasks</Text>

      {/* Login Button */}
      <TouchableOpacity style={[styles.button, styles.loginButton]}>
        <Text style={styles.loginbuttonText}>Log In</Text>
      </TouchableOpacity>

      {/* Sign Up Button */}
      <TouchableOpacity style={[styles.button, styles.signupButton]}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.text1}>Sign up using</Text>

      {/* Icons for social media sign-up */}
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton}>
        {myIcon}
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
        {myIcon1}
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
        {myIcon2}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    position: 'relative',
    bottom: 60,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  h1: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
    position: 'relative',
    bottom: 50,
  },
  text: {
    color: 'grey',
    fontSize: 15,
    position: 'relative',
    bottom: 50,
  },
  text1: {
    color: 'grey',
    fontSize: 15,
    position: 'relative',
    bottom: 5,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginTop: 20,
    width: 250,
    position: 'relative',
    bottom: 50,
  },
  signupButton: {
    borderColor: 'blue',
    borderWidth: 2,
  },
  loginButton: {
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginbuttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: 200,
  },
  iconButton: {
    padding: 0,
  },
});

export default CenteredImage;
