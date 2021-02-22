
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import Botao from './components/Botao';
import Display from './components/Display';

const estadoInicial = {
  valorNaTela: '0',
  limparTela: false,
  operacao: null,
  valores: [0,0],
  valorAtual: 0
}

export default class App extends Component {

  state = { ...estadoInicial }

  adicionarDigito = (valorInformado) => {
    
    const limparTela = this.state.valorNaTela === '0' || this.state.limparTela;
    
    if(valorInformado === '.' && !limparTela && this.state.valorNaTela.includes('.')) {
        return
    }
   
    const valorAtual = limparTela ? '' : this.state.valorNaTela
    const valorNaTela = valorAtual + valorInformado
    
    this.setState({ 
      valorNaTela: valorNaTela,
      limparTela: false
    })

    if(valorInformado !== '.') {
      const novoValor = parseFloat(valorNaTela)
      const valores = [...this.state.valores]
      valores[this.state.valorAtual] = novoValor

      this.setState({ valores: valores })
    }
  }

  limparTela = () => {
    this.setState({ ...estadoInicial })
  }

  definirOperacao = (operacao) => {
    if(this.state.valorAtual === 0) {
      this.setState({ 
        operacao: operacao, 
        valorAtual: 1,
        limparTela: true
      })
    } else {
        const igual = operacao === '='
        const valores = [...this.state.valores]

        try{
          valores[0] = eval(`${valores[0]} ${this.state.operacao} ${valores[1]}`)
        } catch(error){
          valores[0] = this.state.valores[0]
        }

        valores[1] = 0
        this.setState({ 
          valorNaTela: `${valores[0]}`, 
          operacao: igual ? null : operacao,
          valorAtual: igual ? 0 : 1,
          limparTela: true,
          valores: valores
        })
    }
  }
  
   render() {
      return (
          <SafeAreaView>
              <View style={styles.container}>
                <Display valor={this.state.valorNaTela}/>
                <View style={styles.buttons}>
                  <Botao label='AC' botaoTriplo onClick={this.limparTela}/>
                  <Botao label='/' botaoDeOperacao onClick={this.definirOperacao}/>
                  <Botao label='7' onClick={this.adicionarDigito}/>
                  <Botao label='8' onClick={this.adicionarDigito}/>
                  <Botao label='9' onClick={this.adicionarDigito}/>
                  <Botao label='*' botaoDeOperacao onClick={this.definirOperacao}/>
                  <Botao label='4' onClick={this.adicionarDigito}/>
                  <Botao label='5' onClick={this.adicionarDigito}/>
                  <Botao label='6' onClick={this.adicionarDigito}/>
                  <Botao label='-' botaoDeOperacao onClick={this.definirOperacao}/>
                  <Botao label='1' onClick={this.adicionarDigito}/>
                  <Botao label='2' onClick={this.adicionarDigito}/>
                  <Botao label='3' onClick={this.adicionarDigito}/>
                  <Botao label='+' botaoDeOperacao onClick={this.definirOperacao}/>
                  <Botao label='0' botaoDuplo onClick={this.adicionarDigito}/>
                  <Botao label='.' onClick={this.adicionarDigito}/>
                  <Botao label='=' botaoDeOperacao onClick={this.definirOperacao}/>
                </View>
              </View>
          </SafeAreaView>
      )
   }
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  buttons:{
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});