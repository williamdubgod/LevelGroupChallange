import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import Footer from './Footer';

const RequestsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Icon name="search" type="material-icons" size={24} color="black" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar fornecedores"
            placeholderTextColor="#808080"
          />
        </View>
      </View>

      {/* Conteúdo da tela de pedidos aqui */}

      <Footer />
    </View>
  );
};

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
    marginTop: 60
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    paddingLeft: 16,
    flex: 1,
  },
  searchIcon: {
    marginRight: 10, 
  },
  searchInput: {
    flex: 1,
    height: 60,
  },
});

export default RequestsScreen;
