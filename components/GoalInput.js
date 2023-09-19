import { StyleSheet, View, Button , TextInput } from "react-native"
function GoalInput(props){
    return <View style={styles.inputContainer}>
    <TextInput
      onChangeText={props.goalInputHandler}
      style={styles.TextInput}
      placeholder='your course Goal'
      value={props.enteryGoal}
    />
    <Button
      title='Add a Goal'
      onPress={props.addGoalHandler}
    />
  </View>
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center ',
        borderBottomWidth: 1,
        borderBottomColor: 'blue',
        paddingBottom: 24
      },
      TextInput: {
        borderWidth: 1,
        borderColor: 'black',
        width: '75%',
        marginRight: 8,
        padding: 8,
      },
})

