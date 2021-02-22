import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

export default (props) => {
    return (
        <View style={style.display}>
            <Text style={style.valorNoDisplay} numberOfLines={1}>
                {props.valor}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    display: {
        flex: 1,
        padding: 70,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end'
    },
    valorNoDisplay: {
        fontSize: 60,
        color: '#fff'
    }
});
