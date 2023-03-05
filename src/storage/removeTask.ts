import AsyncStorage from "@react-native-async-storage/async-storage"
import { TaskProps } from "./taskDTO"

export async function removeTask(taskId: string) {
  try {
    const storage = await AsyncStorage.getItem(`@ignite-tasks`)

    const tasks: TaskProps[] = storage ? JSON.parse(storage) : []
    const filteredTasks = tasks.filter(task => task.id !== taskId)

    await AsyncStorage.setItem('@ignite-tasks', JSON.stringify(filteredTasks))
    return filteredTasks
  } catch (error) {
    throw error
  }
}