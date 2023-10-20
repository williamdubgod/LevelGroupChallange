import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleScreenPress = () => {
    Keyboard.dismiss();
  };

  const navigateToRegister = () => {
    navigation.navigate('RegisterScreen');
  };

  const navigateToHome = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adicionado o behavior aqui
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={handleScreenPress}>
        <View style={styles.content}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="black"
            />
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Senha"
                secureTextEntry={!isPasswordVisible}
                placeholderTextColor="black"
              />
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <Icon
                  name={isPasswordVisible ? 'eye' : 'eye-slash'}
                  type="font-awesome"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={navigateToHome} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Entrar</Text>
            </TouchableOpacity>
            <View style={styles.registerLink}>
              <Text style={styles.registerLinkText}>Ainda não tem uma conta?</Text>
              <TouchableOpacity onPress={navigateToRegister}>
                <Text style={styles.registerButtonText}>Registre-se</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9FFE5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    width: 242,
    height: 225,
    marginBottom: 50,
  },
  formContainer: {
    alignItems: 'center',
  },
  input: {
    width: 321,
    height: 52,
    borderRadius: 15,
    backgroundColor: 'rgba(128, 128, 128, 0.50)',
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 321,
    height: 52,
    borderRadius: 15,
    backgroundColor: 'rgba(128, 128, 128, 0.50)',
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  passwordInput: {
    flex: 1,
  },
  loginButton: {
    backgroundColor: 'black',
    width: 153,
    height: 54,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  backButton: {
    fontSize: 30,
    color: 'black',
    paddingLeft: 20,
  },
  registerLink: {
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  registerLinkText: {
    color: 'black',
    marginBottom: 10,
  },
  registerButtonText: {
    color: 'black',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
