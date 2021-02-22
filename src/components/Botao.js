import React from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native';

export default (props) => {
    const stylesButton = [styles.botao]

    if(props.botaoDuplo) stylesButton.push(styles.botaoDuplo)
    if (props.botaoTriplo) stylesButton.push(styles.botaoTriplo)
    if (props.botaoDeOperacao) stylesButton.push(styles.botaoDeOperacao)

    return (
        <TouchableHighlight onPress = {() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    botao: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    },
    botaoDeOperacao: {
        color: '#fff',
        backgroundColor: '#fa8231'
    },
    botaoDuplo: {
        width: (Dimensions.get('window').width /4) * 2
    },
    botaoTriplo: {
        width: (Dimensions.get('window').width /4) * 3
    }
});