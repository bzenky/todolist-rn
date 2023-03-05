import { ClipboardText } from "phosphor-react-native"
import { BoldTitle, Container, Subtitle } from "./styles"

export function EmptyTaskList() {
  return (
    <Container>
      <ClipboardText size={56} color="#3d3d3d" />

      <BoldTitle>
        Você ainda não tem tarefas cadastradas
      </BoldTitle>

      <Subtitle>
        Crie tarefas e organize seus itens a fazer
      </Subtitle>
    </Container>
  )
}