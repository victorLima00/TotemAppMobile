import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Regristoscreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCPF] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
     const response = await axios.post('http://localhost:3000/registro', {
        username,
        password,
        email,
        cpf,
      });

      const responseData = response.data;
      const retorno = responseData.message;

      if(retorno == 'Registro bem-sucedido!'){
        navigation.navigate('Login');
      } else if(retorno == 'Registro mal-sucedido!') {
        Alert.alert('Erro no Registro. Verifique as credenciais.');
      }
    } catch (error) {
      console.error('Erro no registro:', error);
      Alert.alert('Erro no registro. Verifique as credenciais.');
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

        <Text>E-mail:</Text>
        <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu e-mail"
            />

        <Text>CPF:</Text>
        <TextInput
                value={cpf}
                onChangeText={setCPF}
                placeholder="Digite seu CFP"
            />

      <Button title="Registro" onPress={handleLogin} />
    </View>
  );
};

export default Regristoscreen;