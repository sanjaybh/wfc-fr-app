import { StyleSheet, View, Text, TextInput, Button, Alert, Modal, Image } from "react-native";
import { useState } from 'react'

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }

    function onAddGoalHandler() {
        if (enteredGoalText.trim() == "") {
            Alert.alert("Alert!", "Field is required.")
            return
        } else {
            props.onAddGoal(enteredGoalText)
            setEnteredGoalText('')
        }
    }
    function onCancelGoalHandler() {
        props.onCancel(false)
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <View style={styles.formHeader}>
                    <Text style={styles.formHeaderText}>Set Your Goals!!!</Text>
                </View>
                <Image style={styles.image} source={require('../../assets/images/goal.png')} />
                <TextInput
                    placeholder="Enter Value"
                    style={styles.textInput}
                    value={enteredGoalText}
                    onChangeText={goalInputHandler}
                    placeholderTextColor={'black'}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button color="blue" title="Add Goal" onPress={onAddGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button color="orange" title="Cancel" onPress={onCancelGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}
export default GoalInput;



const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        _flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        _marginBottom: 24,
        paddingHorizontal: 16,
        paddingVertical: 16,
        _borderBottomColor: '#cccccc',
        _borderBottomWidth: 0,
        backgroundColor: "#311b6b"
    },
    formHeader: {
        borderColor: '#cccccc',
        borderWidth: 0,
        marginBottom: 1,
    },
    formHeaderText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        marginHorizontal: 0
    },
    textInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#cccccc',
        backgroundColor: '#FFFDD2',
        padding: 8,
        _marginRight: 8,
        color: '#000000',
        borderRadius: 6
    },
    image: {
        height: 100,
        width: 100,
        margin: 10
    },
    button: {
        marginHorizontal: 8,
        width: 100
    }
})