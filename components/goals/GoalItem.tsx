import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
    return (
        <View style={styles.goalItem}>
            <Pressable
                onPress={props.onDeleteItem.bind(this, props.id)}
                android_ripple={{ color: '#dddddd' }}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalItemText}>{props.text}</Text>
            </Pressable>
        </View >
    )
}
export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 4,
        borderRadius: 6,
        backgroundColor: 'orange',
    },
    pressedItem: {
        opacity: 0.5
    },
    goalItemText: {
        color: 'white',
        padding: 8,
    },
})