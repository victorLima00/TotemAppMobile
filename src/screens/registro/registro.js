import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import { TouchableOpacity, TextInput, Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Animated } from "react-native";

export default function Registro({navigation}) {
  const [showPassword, setShowPassword] = useState(false);
  const iconName = showPassword ? 'eye-off' : 'eye';
  const av = new Animated.Value(0);
  av.addListener(() => {return});

  const retornar = () => {
    navigation.removeListener
    navigation.navigate('Login');
  }

  return (
    <ImageBackground
      source={require('../../../assets/fundo.png')}
      style={styles.container}
      >
      <View style={styles.container}>
        <Ionicons name={'md-arrow-back'} size={34} color="black" onPress={retornar}  style={{position: 'absolute', top: 50}}/>
        <View style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center' }}>
          <TextInput
            style={styles.inputlogin}
            placeholder="Usuario"
            placeholderTextColor="black"
          />
          <TextInput
            style={styles.inputsenha}
            placeholder="Senha"
            placeholderTextColor="black"
            secureTextEntry={!showPassword}
          />      
          <TouchableOpacity style={styles.iconsenha} onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={iconName} size={24} color="black" />
          </TouchableOpacity>
          <TextInput
            style={styles.inputemail}
            placeholder="Email"
            placeholderTextColor="black"
          />
          <TextInput
            style={styles.inputcpf}
            placeholder="CPF"
            placeholderTextColor="black"
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.registroButton}>
              <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    justifyContent: 'center',
  },
  inputlogin: {
    height: 50,
    margin: 0,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    borderBottomColor: 'black',
    color: 'black',
    marginTop: 90,
    marginBottom: 30,
  },
  inputsenha: {
    height: 50,
    margin: 0,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    borderBottomColor: 'black',
    color: 'black',
    marginBottom: 30,
  },
  inputemail: {
    height: 50,
    margin: 0,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    borderBottomColor: 'black',
    color: 'black',
    marginBottom: 30,
    marginTop: 30,
  },
  inputcpf: {
    height: 50,
    margin: 0,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    borderBottomColor: 'black',
    color: 'black',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  registroButton: {
    backgroundColor: '#85C26C',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 150,
    marginLeft: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  iconsenha: {
    marginTop: -65,
    marginStart: 'auto',
  },
});