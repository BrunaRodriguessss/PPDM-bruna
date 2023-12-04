import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image, Pressable} from 'react-native';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function TelaInicial(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
       <Text style={styles.text}>BOOK GUIDE</Text>
      <Text style={styles.text6}>Seja bem-vindo(a)!</Text>
      <Image
        style={styles.image2}
        source={{
          uri: 'https://i.pinimg.com/564x/d5/39/a5/d539a5edce40ddd8725871104172cae9.jpg',
        }}
      />
      <Pressable style={styles.Button} onPress={()=>{
        navigation.navigate ('Login')
      }}>
        <Text style={styles.text5}>Entrar</Text>
      </Pressable>

      <Pressable style={styles.Button} onPress={()=>{
        navigation.navigate ('Cadastro')
      }}>
        <Text style={styles.text5}>Cadastrar</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}


function TelaCadastro(){
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
      <Text style={styles.text1}>Faça cadastro</Text>
      <TextInput placeholder="Nome e Sobrenome" style={styles.input} onChangeText={onChangeText} value={text}/>
      <TextInput 
        placeholder="E-mail"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
       <TextInput placeholder="Senha" secureTextEntry={true} style={styles.input}/>
      <Pressable style={styles.Button} onPress={()=>{
        navigation.navigate ('Login')
      }}>
        <Text style={styles.text5}>Inscreva-se</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaLogin(){
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
      <Pressable style={styles.Button} onPress={()=>{
        navigation.navigate ('Principal')
      }}>
        <Text style={styles.text5}>Enviar</Text>
      </Pressable>

      <Pressable style={styles.Button} onPress={()=>{
        navigation.navigate ('Esqueceu Senha')
      }}>
        <Text style={styles.text5}>Esqueci a senha</Text>
      </Pressable>
      <StatusBar style="auto" />
      <Text>{text}</Text>
    </View>
  );
}

function TelaEsqueceuSenha(){
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
        <Image
        style={styles.image}
        source={{
          uri: 'https://i.pinimg.com/564x/d8/d1/a0/d8d1a03521de466aa26856a1962a85e5.jpg',
        }}
      />
      <Text style={styles.text}>Redefinir senha</Text>
      <Text style={styles.text2}>Digite um e-mail para ler as informações</Text>
      <TextInput 
        placeholder="E-mail"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Pressable style={styles.Button} onPress={()=>{
        navigation.navigate ('Principal')
      }}>
        <Text style={styles.text5}>Enviar</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaPrincipal(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>essa é a tela principal</Text>
      <Pressable style={styles.Button} onPress={()=>{
        navigation.navigate ('Ver Resenhas')
      }}>
        <Text style={styles.text5}>Resenhas</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaDasResenhas(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Essa é a tela das resenhas</Text>
      <Pressable style={styles.Button} onPress={()=>{
        navigation.navigate ('Novas Resenhas')
      }}>
        <Text style={styles.text5}>novas resenhas</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaNovasResenhas(){
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Escrevas novas resenhas</Text>
      <Text style={styles.text4}>Autor(a)</Text>
      <TextInput placeholder="" style={styles.input} onChangeText={onChangeText} value={text}/>
      <Text style={styles.text4}>Título dos livros</Text>
      <TextInput placeholder="" style={styles.input} onChangeText={onChangeText} value={text}/>
      <Text style={styles.text4}>Resenha</Text>
      <TextInput placeholder="" style={styles.input} onChangeText={onChangeText} value={text}/>

      <Pressable style={styles.Button} onPress={()=>{
        navigation.navigate ('Perfil')
      }}>
        <Text style={styles.text5}>Finalizar</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}


function TelaPerfil(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>essa é a tela do perfil</Text>
      <Pressable style={styles.Button} onPress={()=>{
        navigation.navigate ('Inicio')
      }}>
        <Text style={styles.text5}>voltar</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}


export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={TelaInicial} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Login" component={TelaLogin} />
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
    backgroundColor:"#230b41",
    borderRadius: 15,
    margin: 15,
    padding: 10,
  },
  text:{
    fontFamily:"times",
    fontSize:50,
    color:"#230B41",
  },
  text1:{
    fontFamily:"times",
    fontSize:20,
    color:"#230B41",
    textDecorationLine: 'underline',
  },
  text2:{
    fontFamily:"times",
    fontSize:20,
    color:"#230B41",
  },
  text3:{
    fontFamily:"times",
    fontSize:20,
    color:"#230B41",
    textDecorationLine: 'underline',
  },
  text4:{
    fontFamily:"times",
    fontSize:17,
    color:"#230B41",
  },
  text5:{
    fontFamily:"times",
    fontSize:17,
    color:"#FFFFFF",
  },
  text6:{
    fontFamily:"times",
    fontSize:20,
    color:"#230B41",
  },
  image:{
    width: "200px",
    height:"200px",
    borderRadius: "100px",
    border: "8px solid #794A86",
    
  },
  image2:{
    width: "400px",
    height:"300px",
    borderRadius: "20px",
    border: "8px solid #794A86",
  },
 
});

