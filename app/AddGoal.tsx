import GoalInput from '@/components/goals/GoalInput'
import GoalItem from '@/components/goals/GoalItem'
import { useState } from 'react'
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native'

const AddGoal = () => {
  const [courseGoals, setCourseGoals] = useState([])
  const [modelIsVisible, setModelIsVisible] = useState(false)

  function startAddGoalHandler() {
    setModelIsVisible(true)
  }

  function endAddGoalHandler() {
    setModelIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler()
  }
  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }
  onListEmpty = () => {
    return <View style={{ alignSelf: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#ffffff' }}>No Data</Text>
    </View>
  }
  return (
    <>
      <View style={styles.appContainer}>
        <Button
          visible={modelIsVisible}
          title="Add New Goal"
          color="#5e0acc"
          onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}
          onPress={startAddGoalHandler} />

        {modelIsVisible && <GoalInput onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />}

        <View style={styles.goalsContainer}>
          <Text style={styles.goalsContainerText}>List of goals</Text>
          <FlatList
            data={courseGoals}
            keyExtractor={(item, index) => {
              return item.id
            }}
            ListEmptyComponent={onListEmpty}
            alwaysBounceVertical={false}
            renderItem={(itemData) => {
              return (
                <GoalItem id={itemData.item.id} text={itemData.item.text} onDeleteItem={deleteGoalHandler} />
              )
            }}
          />
          {/* <ScrollView>
          {courseGoals.map((goal) => (
            <View key={goal.text} style={styles.goalItem}>
              <Text style={styles.goalItemText}>{goal.text}</Text>
            </View>
          ))}
        </ScrollView> */}
        </View>
      </View>
    </>
  )
}

export default AddGoal

const styles = StyleSheet.create({
  appContainer: {
    _flex: 1,
    _paddingTop: 20,
    _paddingHorizontal: 16,
    _backgroundColor: '#1e085e',
    height: '100%'
  },

  goalsContainer: {
    _flex: 5,
    marginLeft: 10
  },
  goalsContainerText: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 18,
    color: '#ffffff'
  }
})
