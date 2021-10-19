import { isNodesEquivalent } from '@babel/types';
import React, { Component } from 'react';
import { View, Text, TextInput, SafeAreaView, 
         Pressable, Image, Keyboard } from 'react-native';
import { styles } from './styles';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      precoAlcool: 0.0,
      precoGasolina: 0.0,
      resultado: 0.0,
      erroAlcool: '',
      erroGasolina: '',
      mensagem: '',
    };

    this.setPrecoAlcool = this.setPrecoAlcool.bind(this);
    this.setPrecoGasolina = this.setPrecoGasolina.bind(this);
    this.verificar = this.verificar.bind(this);

  }

  setPrecoAlcool(valor) {
    this.setState({ precoAlcool: valor, erroAlcool: '', resultado: 0.0 });
  };

  setPrecoGasolina(valor) {
    this.setState({ precoGasolina: valor, erroGasolina: '', resultado: 0.0 });
  };

  verificar() {
    var msgErro1 = '',
      msgErro2 = '',
      mensagem = 'Abasteça com ';
    var valor = 0.0;

    if (isNaN(Number(this.state.precoAlcool)) || Number(this.state.precoAlcool) <= 0 ) {
      msgErro1 = 'Informe um valor válido e maior que zero'
    }

    if (isNaN(Number(this.state.precoGasolina)) || Number(this.state.precoGasolina) <= 0) {
      msgErro2 = 'Informe um valor válido e maior que zero'
    }

    if (msgErro1 == '' && msgErro2 == '') {
      valor = Number(this.state.precoAlcool) / Number(this.state.precoGasolina);

      if (valor >= 0.7) {
        mensagem += 'Gasolina';
      } else if (valor > 0) {
        mensagem += 'Alcool';
      } else {
        mensagem = '';
      }
    }

    this.setState({
      resultado: valor, erroAlcool: msgErro1, erroGasolina: msgErro2, mensagem: mensagem
    });

    Keyboard.dismiss();
  }

  render() {
    return (
      <SafeAreaView style={styles.imageContainer}>
        <View style={styles.container}>
          <View style={styles.top}>
            <Text style={styles.tituloApp}>Alcool ou Gasolina?</Text>
            <LogoImage />
          </View>


          <View style={styles.middle}>
            <Text style={styles.textLabel}>Preço do Alcool (R$)</Text>
            <TextInput
              style={styles.input}
              placeholder="Informe o preço do alcool"
              placeholderTextColor='darkgray'
              onChangeText={this.setPrecoAlcool}
              keyboardType="numeric"
            />
            <Text style={styles.textoErro}>{this.state.erroAlcool}</Text>

            <Text style={styles.textLabel}>Preço da Gasolina (R$)</Text>
            <TextInput
              style={styles.input}
              placeholder="Informe o preço da gasolina"
              placeholderTextColor='darkgray'
              onChangeText={this.setPrecoGasolina}
              keyboardType="numeric"
            />
            <Text style={styles.textoErro}>{this.state.erroGasolina}</Text>

            <Pressable style={styles.button} onPress={this.verificar}>
              <Text style={styles.texto}>Verificar</Text>
            </Pressable>
            <Text style={styles.tituloApp}>{this.state.mensagem}</Text>
          </View>


        </View>
        {/* 

*/}
      </SafeAreaView >
    );
  }
}

class LogoImage extends Component {

  render() {
    return (

      <Image
        source={require('./image/frentista.png')}
        style={{
          width: 100,
          height: 100,
          alignSelf: 'center',
          resizeMode: 'cover',
        }}
      />
    );
  }
}

export default App;
