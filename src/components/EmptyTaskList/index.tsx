import { ClipboardText } from "phosphor-react-native"
import { useTheme } from "styled-components/native"
import {
  BoldTitle,
  Container,
  Subtitle
} from "./styles"

export function EmptyTaskList() {
  const { COLORS } = useTheme()

  return (
    <Container>
      <ClipboardText size={56} color={COLORS.GRAY_300} />

      <BoldTitle>
        Você ainda não tem tarefas cadastradas
      </BoldTitle>

      <Subtitle>
        Crie tarefas e organize seus itens a fazer
      </Subtitle>
    </Container>
  )
}