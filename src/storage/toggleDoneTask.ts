import AsyncStorage from "@react-native-async-storage/async-storage"
import { getAllTasks } from "./getAllTasks"

export async function toggleDoneTask(taskId: string) {
  try {
    const storedTasks = await getAllTasks()

    const updatedTasks = storedTasks.map(task => {
      if (task.id === taskId) {
        task.done = !task.done
      }
      return task
    })

    const storage = JSON.stringify(updatedTasks)
    await AsyncStorage.setItem('@ignite-tasks', storage)
    return updatedTasks
  } catch (error) {
    throw error
  }
}