import { StyleSheet, Dimensions } from 'react-native';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const style = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    logoContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    logo: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
     
    },
    loginFormContainer: {
      paddingHorizontal: 20,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    inputField: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      paddingVertical: 10,
    },
    input: {
      flex: 1,
      fontSize: 16,
      paddingVertical: 10,
    },
    icon: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
      marginRight: 10,
    },
    button: {
      backgroundColor: '#4CAF50',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginTop: 20,
    },
    buttonText: {
      fontSize: 16,
      color: '#fff',
    },
  });
  export default style;