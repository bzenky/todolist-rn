import AsyncStorage from "@react-native-async-storage/async-storage"
import { TaskProps } from "./taskDTO"


export async function getAllTasks() {
  try {
    const storage = await AsyncStorage.getItem(`@ignite-tasks`)

    const tasks: TaskProps[] = storage ? JSON.parse(storage) : []

    return tasks

  } catch (error) {
    throw error
  }
}