import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import { TouchableOpacity, TextInput, Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Animated } from "react-native";
import axios from 'axios';


export default function Login({navigation}) {
  const [showPassword, setShowPassword] = useState(false);
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const iconName = showPassword ? 'eye-off' : 'eye';
  const av = new Animated.Value(0);
  av.addListener(() => {return});

  const navigateToRegistro = () => {
    navigation.removeListener
    navigation.navigate('Registro');
  };

  const realizarLogin = async () =>{
    try {
      const response = await axios.get('http://localhost:3000/get/usuario', {
        params: {
          username: usuario,
          password: senha,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ImageBackground
      source={require('../../../assets/fundo.png')}
      style={styles.container}
      >
      <View style={styles.container}>
        <View style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center' }}>
          <TextInput
            style={styles.inputlogin}
            placeholder="Usuario"
            placeholderTextColor="black"
            value={usuario}
            onChangeText={(text) => setUsuario(text)}
          />
          <TextInput
            style={styles.inputsenha}
            placeholder="Senha"
            placeholderTextColor="black"
            secureTextEntry={!showPassword}
            value={senha}
            onChangeText={(text) => setSenha(text)}
          />
          <TouchableOpacity style={styles.iconsenha} onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={iconName} size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.touch}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.buttonText} onPress={realizarLogin}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registroButton}>
              <Text style={styles.buttonText} onPress={navigateToRegistro}>Registrar</Text>
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
  },
  touch: {
    marginTop: 20,
    color: 'black',
    fontSize: 13,
    marginBottom: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 5,
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#85C26C',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 150,
    marginRight: 20,
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
    marginTop: -40,
    marginStart: 'auto',
  },
});