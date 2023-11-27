import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function TelaInicial(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>esse é o início</Text>
      <Button title="Cadastrar" onPress={()=>{
        navigation.navigate ('Cadastro')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaCadastro(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>aqui faz o cadastro</Text>
      <Button title="esqueceu senha" onPress={()=>{
        navigation.navigate ('Esqueceu Senha')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaEsqueceuSenha(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela de "esqueci a senha"</Text>
      <Button title="tela principal" onPress={()=>{
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
      <Text>essa é a tela principal</Text>
      <Button title="resenhas" onPress={()=>{
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
      <Text>Essa é a tela das resenhas</Text>
      <Button title=" novas resenhas" onPress={()=>{
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
      <Text>essa é a tela para escrever novas resenhas</Text>
      <Button title="perfil" onPress={()=>{
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
      <Text>essa é a tela do perfil</Text>
      <Button title="voltar" onPress={()=>{
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

