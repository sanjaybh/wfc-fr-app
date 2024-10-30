import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

//Alternative to passing navigation as prop, useNavigation hook is provided by native module
import { useNavigation } from '@react-navigation/native'

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }) => {

    //Just in case we need to use the navigation without passing as prop
    const navigation = useNavigation();

    function onPressHandleDetails() {
        navigation.navigate('MealsDetailScreen', { mealId: id, mealTitle: title })
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                android_ripple={{ color: '#ccc' }}
                onPress={onPressHandleDetails}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title} </Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{duration}m</Text>
                        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        shadowOpacity: '0.35',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    buttonPressed: {
        opacity: 0.5
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
})