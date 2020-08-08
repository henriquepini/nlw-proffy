import React from 'react';
import { View, ImageBackground, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';

function GiveClasses() {
  const URL = "http://192.168.0.109:3000";

  function handleOpenWebPlatform() {
    Linking.openURL(URL).catch((err) => console.log('An error occurred', err));
  }
  return (
    <View style={styles.container}>
      <ImageBackground 
        resizeMode="contain" 
        source={giveClassesBgImage} 
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy ?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web.
        </Text>
      </ImageBackground>

      <RectButton onPress={handleOpenWebPlatform} style={styles.okButton}>
        <Text style={styles.okButtonText}>Acessar plataforma</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;