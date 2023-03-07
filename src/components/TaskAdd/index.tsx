import { useState } from "react"
import { Alert } from "react-native"
import { useTheme } from "styled-components/native"
import { PlusCircle } from "phosphor-react-native"
import { addNewTask } from "../../storage/addNewTask"
import { TaskProps } from "../../storage/taskDTO"
import { Button, Container, Input } from "./styles"

interface TaskAddProps {
  setTasks: (value: TaskProps[]) => void
}

export function TaskAdd({ setTasks }: TaskAddProps) {
  const [focused, setFocused] = useState(false)
  const [newTask, setNewTask] = useState('')
  const { COLORS } = useTheme()

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
        style={focused && { borderColor: COLORS.PURPLE_DARK }}
        onChangeText={setNewTask}
        value={newTask}
      />

      <Button onPress={() => handleAddNewTask(newTask)}>
        <PlusCircle size={16} color={COLORS.GRAY_100} />
      </Button>
    </Container>
  )
}