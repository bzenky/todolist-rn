import { useState } from "react"
import { Alert } from "react-native"
import { PlusCircle } from "phosphor-react-native"
import { addNewTask } from "../../storage/addNewTask"
import { Button, Container, Input } from "./styles"
import { TaskProps } from "../../storage/taskDTO"

interface TaskAddProps {
  setTasks: (value: TaskProps[]) => void
}

export function TaskAdd({ setTasks }: TaskAddProps) {
  const [focused, setFocused] = useState(false)
  const [newTask, setNewTask] = useState('')

  async function handleAddNewTask(task: string) {
    if (!task || task.trim().length === 0) {
      return Alert.alert('Opa!', 'Você precisa digitar uma tarefa para adicionar.')
    }

    const response = await addNewTask(task)
    setNewTask('')
    if (response) setTasks(response)
  }

  return (
    <Container>
      <Input
        placeholder="Adicionar uma nova tarefa"
        placeholderTextColor="#808080"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
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