import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
export default function App() {
  const [enteryGoal, setGoal] = useState('');
  const [courseGoals, setCouresGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setGoal(enteredText);
  };
  function addGoalHandler() {
    setCouresGoals(currentCourseGoals => [...currentCourseGoals, enteryGoal]);

  };
  return (
    <View style={styles.app}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.TextInput}
          placeholder='your course Goal'
        />
        <Button
          title='Add a Goal'
          onPress={addGoalHandler}
        />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal, index) => {
          return <Text style={styles.goalItem} key={index}>{goal}</Text>
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },
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
  goalsContainer: {
    flex: 3
  },
  goalItem: {
    margin:8,
    borderRadius:6,
    backgroundColor:"#5e0acc",
    padding:8,
    color:'white'
  }
});
