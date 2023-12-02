import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      console.log({ username, password });
      const response = await axios.post('http://localhost:3000/login', {
        username,
        password,
      });
  
      console.log(response.data); 
      
      const responseData = response.data;
      const retorno = responseData.message;
  
      if (retorno === 'Login bem-sucedido!') {
        navigation.navigate('Home');
      } else if (retorno === 'Login mal-sucedido!') {
        Alert.alert('Erro no login. Verifique as credenciais.');
      }
    } catch (error) {
      console.error('Erro durante a requisição:', error);
      Alert.alert('Erro durante a requisição. Verifique o console para detalhes.');
    }
  };

  return (
    <View>
      <Text>Username:</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Digite seu nome de usuário"
      />

      <Text>Password:</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Digite sua senha"
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} />
      <Button title="Registro" onPress={() => navigation.navigate('Registro')}/>
    </View>
  );
};

export default LoginScreen;