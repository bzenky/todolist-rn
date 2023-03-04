import { PlusCircle } from "phosphor-react-native";
import { useState } from "react";
import { addNewTask } from "../../storage/addNewTask";
import { Button, Container, Input } from "./styles";

export function TaskAdd() {
  const [focused, setFocused] = useState(false)
  const [newTask, setNewTask] = useState('')

  function handleAddNewTask(task: string) {
    addNewTask(task)
    setNewTask('')
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