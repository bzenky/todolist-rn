import { useState } from "react"
import { PlusCircle } from "phosphor-react-native"
import { Alert } from "react-native"
import { addNewTask } from "../../storage/addNewTask"
import { Button, Container, Input } from "./styles"

interface TaskAddProps {
  fetchTasks: () => Promise<void>
}

export function TaskAdd({ fetchTasks }: TaskAddProps) {
  const [focused, setFocused] = useState(false)
  const [newTask, setNewTask] = useState('')

  async function handleAddNewTask(task: string) {
    if (!task || task.trim().length === 0) {
      Alert.alert('Opa!', 'Você precisa digitar uma tarefa para adicionar.')
    }

    addNewTask(task)
    setNewTask('')
    await fetchTasks()
  }

  return (
    <Container>
      <Input
        placeholder="Adicionar uma nova tarefa"
        placeholderTextColor="#808080"
        onFocus={() => setFocused(true)}
        style={focused && { borderColor: '#5E60CE' }}
        onChangeText={setNewTask}
        value={newTask}
      />

      <Button onPress={() => handleAddNewTask(newTask)}>
        <PlusCircle size={16} color="#F2F2F2" />
      </Button>
    </Container>
  )
}