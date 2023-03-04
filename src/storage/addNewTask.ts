import AsyncStorage from "@react-native-async-storage/async-storage"
import { getAllTasks } from "./getAllTasks"

export async function addNewTask(task: string) {
  try {
    const storedTasks = await getAllTasks()

    const newTask = {
      id: new Date().getTime(),
      task,
      done: false,
      createdAt: new Date()
    }

    const taskAlreadyExists = storedTasks.filter(task => task.task === newTask.task)

    if (taskAlreadyExists.length > 0) {
      throw new Error('Task already exists')
    }

    const storage = JSON.stringify([...storedTasks, newTask])

    await AsyncStorage.setItem('@ignite-tasks', storage)

  } catch (error) {
    throw error
  }
}