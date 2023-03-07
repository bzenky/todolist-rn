import { useTheme } from "styled-components/native"
import {
  Container,
  NumberWrapper,
  Title,
  TitleNumber,
  TitleWrapper
} from "./styles"

interface TaskListHeaderProps {
  taskListLength: number
  taskListDoneLength: number
}

export function TaskListHeader({ taskListLength, taskListDoneLength }: TaskListHeaderProps) {
  const { COLORS } = useTheme()

  return (
    <Container>
      <TitleWrapper>
        <Title color={COLORS.BLUE}>
          Criadas
        </Title>

        <NumberWrapper>
          <TitleNumber>
            {taskListLength}
          </TitleNumber>
        </NumberWrapper>
      </TitleWrapper>

      <TitleWrapper>
        <Title color={COLORS.PURPLE}>
          Concluídas
        </Title>

        <NumberWrapper>
          <TitleNumber>
            {taskListDoneLength}
          </TitleNumber>
        </NumberWrapper>
      </TitleWrapper>
    </Container>
  )
}