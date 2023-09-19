import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [enteryGoal, setGoal] = useState('');
  const [courseGoals, setCouresGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setGoal(enteredText);
  };
  function addGoalHandler() {
    setCouresGoals(currentCourseGoals => [...currentCourseGoals, { text: enteryGoal, id: Math.random().toString() }]);
    setGoal('')

  };
  function deletGoalHandler(id) {
    console.log("DELETE")
    console.log(id)
    setCouresGoals(courseGoals.filter((item) => item.id !== id))
  }
  return (
    <View style={styles.app}>
      <GoalInput goalInputHandler={goalInputHandler} addGoalHandler={addGoalHandler} enteryGoal={enteryGoal} />
      <FlatList style={styles.goalsContainer} alwaysBounceVertical={false} data={courseGoals} renderItem={itemData => {
        return (
          <GoalItem index={itemData.item.id} item={itemData.item.text} deletGoalHandler={deletGoalHandler} />
        )
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 3
  },

});
