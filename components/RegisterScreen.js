import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleScreenPress = () => {
    Keyboard.dismiss();
  };

  const validateEmail = (email) => {
    // Expressão regular para verificar um email válido
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    // Verifica se a senha atende aos critérios (uma letra maiúscula e um caractere especial)
    return /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!name) {
      newErrors.name = 'Campo obrigatório';
    }
    if (!email) {
      newErrors.email = 'Campo obrigatório';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Email inválido';
    }
    if (!password) {
      newErrors.password = 'Campo obrigatório';
    } else if (!validatePassword(password)) {
      newErrors.password = 'Senha inválida';
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true se não houver erros
  };

  const handleRegister = () => {
    if (validateForm()) {
      // Se a validação passar, você pode prosseguir com o registro
      // Aqui, você pode chamar a API para criar a conta do usuário ou executar outras ações
      // Certifique-se de implementar essa parte de acordo com a lógica do seu aplicativo.
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={handleScreenPress}>
        <View style={styles.content}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <View style={styles.formContainer}>
            <TextInput
              style={[styles.input, errors.name && styles.errorInput]}
              placeholder="Nome"
              placeholderTextColor="black"
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <TextInput
              style={[styles.input, errors.email && styles.errorInput]}
              placeholder="Email"
              placeholderTextColor="black"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <View style={[styles.passwordContainer, errors.password && styles.errorInput]}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Senha"
                secureTextEntry={!isPasswordVisible}
                placeholderTextColor="black"
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
            <View style={[styles.passwordContainer, errors.confirmPassword && styles.errorInput]}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Confirmar Senha"
                secureTextEntry={!isConfirmPasswordVisible}
                placeholderTextColor="black"
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
              />
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
              <Text style={styles.loginButtonText}>Cadastrar</Text>
            </TouchableOpacity>
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
  errorInput: {
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default RegisterScreen;
