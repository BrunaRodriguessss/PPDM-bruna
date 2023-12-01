import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image} from 'react-native';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function TelaInicial(){
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://i.pinimg.com/564x/8b/6f/56/8b6f560c593b4062218ed2d06eb71b84.jpg',
        }}
      />
      <Text style={styles.text}>BOOK GUIDE</Text>
      <Text style={styles.text1}>Já é cadastrado?</Text>
      <TextInput placeholder="Nome e Sobrenome" style={styles.input} onChangeText={onChangeText} value={text}/>
      <TextInput 
        placeholder="E-mail"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      
      <TextInput placeholder="Senha" secureTextEntry={true} style={styles.input}/>
      <Button color= "#230B41" title="Inscreva-se" onPress={() => navigation.navigate('Cadastro')} />
      <StatusBar style="auto" />
      
      
    </View>
  );
}

function TelaCadastro(){
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Faça login</Text>
      <StatusBar style="auto" />
      <TextInput
        placeholder="E-mail"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput placeholder="Senha" secureTextEntry={true} style={styles.input}/>
      <Button color= "#230B41" title="Login" onPress={() => navigation.navigate('Esqueceu Senha')} />
      <StatusBar style="auto" />
      <Text>{text}</Text>
    </View>
  );
}

function TelaEsqueceuSenha(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Essa é a tela de "esqueci a senha"</Text>
      <Button color= "#230B41" title="tela principal" onPress={()=>{
        navigation.navigate ('Principal')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaPrincipal(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>essa é a tela principal</Text>
      <Button color= "#230B41" title="resenhas" onPress={()=>{
        navigation.navigate ('Ver Resenhas')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaDasResenhas(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Essa é a tela das resenhas</Text>
      <Button color= "#230B41" title=" novas resenhas" onPress={()=>{
        navigation.navigate ('Novas Resenhas')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaNovasResenhas(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>essa é a tela para escrever novas resenhas</Text>
      <Button color= "#230B41" title="perfil" onPress={()=>{
        navigation.navigate ('Perfil')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaPerfil(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>essa é a tela do perfil</Text>
      <Button color= "#230B41" title="voltar" onPress={()=>{
        navigation.navigate ('Início')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}


export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={TelaInicial} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Esqueceu Senha" component={TelaEsqueceuSenha} />
        <Stack.Screen name="Principal" component={TelaPrincipal} />
        <Stack.Screen name="Ver Resenhas" component={TelaDasResenhas} />
        <Stack.Screen name="Novas Resenhas" component={TelaNovasResenhas} />
        <Stack.Screen name="Perfil" component={TelaPerfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B397BB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#D1D5DA',

  },
  Button:{
    
    borderRadius: 15,
  },
  text:{
    fontFamily:"italic",
    fontSize:40,
    color:"#230B41",
  },
  text1:{
    fontFamily:"italic",
    fontSize:20,
    color:"#230B41",
  },
  image:{
    width: "200px",
    height:"200px",
    borderRadius: "100px",
  },
});

