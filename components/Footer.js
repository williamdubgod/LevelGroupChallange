import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

export default function Footer() {

    const navigation = useNavigation();

    const navigateToHome = () => {
        navigation.navigate('HomeScreen'); 
    };

    const navigateToRequests = () => {
        navigation.navigate('RequestsScreen'); 
    };

    return(
        <View style={styles.footer}>
            <TouchableOpacity onPress={navigateToHome}>
                <Icon name="home" type="material-icons" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToRequests}>
                <Icon name="search" type="material-icons" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="shopping-cart" type="material-icons" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="account-circle" type="material-icons" size={30} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#202022',
      padding: 0.075 * width, // Usando porcentagem da largura
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
  });