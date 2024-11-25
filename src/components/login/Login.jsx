import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Entypo from 'react-native-vector-icons/Entypo';







const LoginScreen = ({ navigation }) => {
 
    const handleLogin = async (values) => {
     navigation.navigate('maintab')
      };



  // Validation schema for formik
  const loginValidationSchema = Yup.object().shape({
    emailOrPhone: Yup.string().required('Email or Phone is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });


  return (
    <View style={styles.container}>
      {/* Myntra Logo */}
      <Image source={require('../../assests/images/logo.png')} style={styles.logo} />
      {/* <Image source={PLOGE} style={styles.logo} /> */}

      {/* Formik Form */}
      <Formik
        initialValues={{ emailOrPhone: '', password: '' }}
        validationSchema={loginValidationSchema}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            {/* Email/Phone Input */}
            <TextInput
              style={styles.input}
              placeholder="Email/Phone"
              placeholderTextColor={'black'}
              onChangeText={handleChange('emailOrPhone')}
              onBlur={handleBlur('emailOrPhone')}
              value={values.emailOrPhone}
            />
            {errors.emailOrPhone && touched.emailOrPhone && <Text style={styles.errorText}>{errors.emailOrPhone}</Text>}

            {/* Password Input */}
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={'black'}
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {errors.password && touched.password && <Text style={styles.errorText}>{errors.password}</Text>}

            {/* Login Button */}
            <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            {/* Social Login Options */}
            <View style={styles.socialLoginContainer}>

            <TouchableOpacity>
            <Entypo name="facebook" size={30} color="#316FF6" />
            </TouchableOpacity>

             <TouchableOpacity>
             <Image source={require('../../assests/images/googly.png')} style={styles.icon} />
             </TouchableOpacity>
              

            </View>

            {/* Sign Up and Forgot Password */}
            <View style={styles.footer}>
              <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                <Text style={styles.footerText}>New to Selen? Sign up</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.footerText}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9eee8',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    borderColor:'black',
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
    color:'black'
  },
  loginButton: {
    height: 50,
    backgroundColor: '#FF3E6C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    color: '#FF3E6C',
    fontWeight: 'bold',
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  icon:{
    height:35,
    width:35,
    borderRadius:10
  }
});

export default LoginScreen;
