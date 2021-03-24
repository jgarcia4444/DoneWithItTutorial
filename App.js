import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './components/WelcomeScreen';
import ImageView from './components/ImageView';

export default function App() {

  const [pageRoute, setPageRoute] = useState('WELCOME')

  const goToImageView = () => {
    setPageRoute('IMAGEVIEW');
  }

  const backToWelcomeScreen = () => {
    setPageRoute('WELCOME');
  }

  return (
    <View style={styles.container}>
      {pageRoute === 'WELCOME' && <WelcomeScreen goToImageView={goToImageView} />}
      {pageRoute === 'IMAGEVIEW' && <ImageView back={backToWelcomeScreen} />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
