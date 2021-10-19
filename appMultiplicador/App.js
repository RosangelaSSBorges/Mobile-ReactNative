import { isNodesEquivalent } from '@babel/types';
import React, { Component } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, ImageBackground, Pressable } from 'react-native';
import { styles } from './styles';
import imageCalculator from "./image/calculadora.png"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      primeiroNumero: 0.0,
      segundoNumero: 0.0,
      resultado: 0.0,
      erroPrimeiro: '',
      erroSegundo: '',
    };

    this.setPrimeiro = this.setPrimeiro.bind(this);
    this.setSegundo = this.setSegundo.bind(this);
    this.multiplicar = this.multiplicar.bind(this);

  }

  setPrimeiro(valor) {
    this.setState({ primeiroNumero: valor, erroPrimeiro: '', resultado: 0.0 });
  };

  setSegundo(valor) {
    this.setState({ segundoNumero: valor, erroSegundo: '', resultado: 0.0 });
  };

  multiplicar() {
    var msgErro1 = '',
      msgErro2 = '';
    var valor = 0.0;


    if (isNaN(Number(this.state.primeiroNumero))) {
      msgErro1 = 'Informe um valor válido'
    }

    if (isNaN(Number(this.state.segundoNumero))) {
      msgErro2 = 'Informe um valor válido'
    }

    if (msgErro1 == '' && msgErro2 == '') {
      valor = Number(this.state.primeiroNumero) * Number(this.state.segundoNumero);
    }

    this.setState({
      resultado: valor, erroPrimeiro: msgErro1, erroSegundo: msgErro2
    });


  }

  render() {
    return (
      <SafeAreaView style={styles.imageContainer}>
        <ImageBackground source={imageCalculator} resizeMode="cover" style={styles.image}>

          <View style={styles.container}>
            <View style={styles.top}>
              <Text style={styles.tituloApp}>Multiplicador de Números</Text>
            </View>

            <View style={styles.middle}>
              <Text style={styles.textLabel}>Primeiro número</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite o primeiro número"
                placeholderTextColor='darkgray'
                onChangeText={this.setPrimeiro}
                keyboardType="numeric"
              />
              <Text style={styles.textoErro}>{this.state.erroPrimeiro}</Text>

              <Text style={styles.textLabel}>Segundo número</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite o segundo número"
                placeholderTextColor='darkgray'
                onChangeText={this.setSegundo}
                keyboardType="numeric"
              />
              <Text style={styles.textoErro}>{this.state.erroSegundo}</Text>

              <Pressable style={styles.button} onPress={this.multiplicar}>
                <Text style={styles.texto}>Calcular</Text>
              </Pressable>
            </View>

            <View style={styles.bottom}>
              <Text style={styles.tituloApp}>Resultado: {this.state.resultado}</Text>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default App;
