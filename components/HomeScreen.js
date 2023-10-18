import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import Cadastro from '../assets/cadastro.png';
import Pedidos from '../assets/pedidos.png';
import Rectangle from './Rectangle';
import Footer from './Footer';

const HomeScreen = () => {
  const numberOfRectangles = 3; 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/miniLogo.png')} style={styles.logo} />
        <TouchableOpacity>
          <Icon name="notifications" type="material-icons" size={24} color="grey" />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Cadastrar Pedido
          </Text>
          <Image source={Cadastro} size={24} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Meus Pedidos</Text>
          <Image source={Pedidos} size={24} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Recomendações</Text>

      <ScrollView>
        <View style={styles.rectangleContainer}>
          {Array.from({ length: numberOfRectangles }).map((_, index) => (
            <Rectangle key={index} />
          ))}
        </View>
      </ScrollView>

      <Footer />
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginTop: 0.05 * width, 
  },
  logo: {
    width: 0.25 * width, 
    height: 0.2 * width, 
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 0.04 * width, 
  },
  button: {
    width: 0.45 * width, 
    height: 0.20 * width, 
    borderRadius: 0.025 * width, 
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 0.05 * width, 
  },
  buttonText: {
    color: 'black',
    marginRight: 0.01 * width, 
  },
  title: {
    fontSize: 0.06 * width, 
    fontWeight: 'bold',
    margin: 0.05 * width, 
    marginTop: 0.075 * width, 
  },
  rectangleContainer: {
    padding: 0.05 * width, 
  },
});

export default HomeScreen;
