import { View, Text, Pressable, StyleSheet, Platform } from 'react-native'
import React from 'react'

//Alternative to passing navigation as prop, useNavigation hook is provided by native module
import { useNavigation } from '@react-navigation/native'

export default function CategoryGridTile({ title, color, onPress }) {
    //Just in case we need to use the navigation without passing as prop
    const navigation = useNavigation();

    return (
        <View style={[styles.gridItem]}>
            <Pressable
                onPress={onPress}
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
            >
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        backgroundColor: 'white',
        shadowOpacity: '0.25',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18
    }
})