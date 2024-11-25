import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const SignupScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [confirmation, setConfirmation] = useState(null);
  const [code, setCode] = useState('');

  // Step 1: Send OTP
  const sendOTP = async () => {
    try {
      const confirmationResult = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirmation(confirmationResult);
      Alert.alert('OTP sent successfully');
    } catch (error) {
      Alert.alert('Error sending OTP', error.message);
    }
  };

  // Step 2: Confirm OTP
  const confirmCode = async () => {
    try {
      await confirmation.confirm(code);
      Alert.alert('Phone number authenticated!');
    } catch (error) {
      Alert.alert('Invalid code');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Phone Input */}
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />

      {/* OTP Section */}
      {confirmation ? (
        <OTPInputView
          style={styles.otpInput}
          pinCount={6}
          code={code}
          onCodeChanged={setCode}
          autoFocusOnLoad
          codeInputFieldStyle={styles.otpBox}
          codeInputHighlightStyle={styles.otpBoxActive}
        />
      ) : null}

      {/* Send OTP or Confirm OTP Button */}
      <TouchableOpacity style={styles.button} onPress={confirmation ? confirmCode : sendOTP}>
        <Text style={styles.buttonText}>{confirmation ? 'Verify OTP' : 'Send OTP'}</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styling for a minimalist and clean look, similar to Nykaa or Myntra
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
    color:'black'
  },
  otpInput: {
    height: 50,
    marginVertical: 20,
  },
  otpBox: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  otpBoxActive: {
    borderColor: '#ff3e6c',
  },
  button: {
    backgroundColor: '#ff3e6c',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default SignupScreen;
