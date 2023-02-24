import { PlusCircle } from "phosphor-react-native";
import { useState } from "react";
import { Button, Container, Input } from "./styles";

export function TaskAdd() {
  const [focused, setFocused] = useState(false)

  return (
    <Container>
      <Input
        placeholder="Adicionar uma nova tarefa"
        placeholderTextColor="#808080"
        onFocus={() => setFocused(true)}
        style={focused && { borderColor: '#5E60CE' }}
      />

      <Button>
        <PlusCircle size={16} color="#F2F2F2" />
      </Button>
    </Container>
  )
}