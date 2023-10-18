import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import Image1 from '../assets/Image1.png';
import Image2 from '../assets/Image2.png';
import Image3 from '../assets/Image3.png';

const slides = [
  {
    image: Image1,
    backgroundColor: '#97D8BA',
  },
  {
    image: Image2,
    backgroundColor: '#9F88F2',
  },
  {
    image: Image3,
    backgroundColor: '#FFF2C6',
  },
];

const InicialPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation(); // Obtenha o objeto de navegação

  const changeSlide = (index) => {
    setActiveIndex(index);
  };

  const handleLoginPress = () => {
    navigation.navigate('LoginScreen'); // Navegue para a tela LoginScreen
  };

  const handleRegisterPress = () => {
    navigation.navigate('RegisterScreen'); // Navegue para a tela LoginScreen
  };

  return (
    <View style={[styles.container, { backgroundColor: slides[activeIndex].backgroundColor }]}>
      <View style={styles.imageContainer}>
        <Image source={slides[activeIndex].image} style={styles.image} />
        <Text style={styles.text}>
          BUSQUE AS MELHORES{'\n'}OPÇÕES DISPONÍVEIS
        </Text>
      </View>
      <View style={styles.slideShow}>
        <FlatList
          data={slides}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[
                styles.slideDot,
                {
                  backgroundColor: activeIndex === index ? 'black' : 'white',
                  borderWidth: activeIndex === index ? 0 : 2,
                  borderColor: 'white',
                },
              ]}
              onPress={() => changeSlide(index)}
            />
          )}
          contentContainerStyle={styles.slideDotContainer}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLoginPress} style={[styles.button, { width: 160, height: 60, opacity: 0.5 }]}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegisterPress} style={[styles.button, { width: 160, height: 60 }]}>
          <Text style={styles.buttonText}>Cadastre-se</Text>
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
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 310,
    height: 310,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold', 
    textAlign: 'center',
  },
  slideShow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  slideDotContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  slideDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    margin: 8,
    marginTop: 50
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 80,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 30,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default InicialPage;
