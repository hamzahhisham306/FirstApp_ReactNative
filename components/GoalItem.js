import { StyleSheet, View, Text, Pressable } from "react-native"


function GoalItem(props) {
    return <Pressable android_ripple={{ color: "#dddddd" }} style={({ pressed }) => pressed && styles.pressItem} onPress={() => props.deletGoalHandler(props.index)}><View key={props.index} style={styles.goalItem} >
        <Text style={styles.goalText} >{props.item}</Text>
    </View>
    </Pressable>
}
export default GoalItem;


const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
        padding: 8,
        color: 'white'
    },
    goalText: {
        color: "white"
    },
    pressItem: {
        opacity: 0.5
    }
})