import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const Card = () => {

    return (
        <View style={{paddingTop:22,
		paddingRight:15, paddingLeft:5}}>
            <View style={styles.container}>
                <Text style={styles.price}>₹399</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Select</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.validity}>Validity: 365 Days</Text>
            <Text style={styles.description}>Enjoy TRULY unlimited Local, STD & Roaming calls on any network, 1 GB data per day, 100 National SMS/day for 28 days</Text>
            <View
                style={styles.separtor}
            />
        </View>
    );
}


export default Card;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
    price: {
        fontSize: 20,
        flex: 1,
        color: '#263238',
        fontWeight: '500'
    },
    validity: {
        color: 'rgba(38, 50, 56, 0.7)',
        marginTop: 6,
        fontWeight: '600',
        fontSize: 12
    },
    description: {
        color: 'rgba(38, 50, 56, 0.7)',
        marginTop: 10,
        fontWeight: '300',
        fontSize: 14
    },
    separtor: {
        marginTop: 12,
        borderBottomColor: 'rgba(151, 151, 151, 1)',
        borderBottomWidth: 1,
    },
    button: {
        backgroundColor: '#FFF',
        paddingLeft: 18,
        paddingRight:18,
        borderRadius: 15,
        justifyContent:'center',
        borderColor:'#F1800D',
        borderWidth:1,
    },
    buttonText: {
        color: "#F1800D"
    }
});

