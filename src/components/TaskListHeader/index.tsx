import { Container, NumberWrapper, Title, TitleNumber, TitleWrapper } from "./styles"

interface TaskListHeaderProps {
  taskListLength: number
  taskListDoneLength: number
}

export function TaskListHeader({ taskListLength, taskListDoneLength }: TaskListHeaderProps) {
  return (
    <Container>
      <TitleWrapper>
        <Title color="#4EA8DE">
          Criadas
        </Title>

        <NumberWrapper>
          <TitleNumber>
            {taskListLength}
          </TitleNumber>
        </NumberWrapper>
      </TitleWrapper>

      <TitleWrapper>
        <Title color="#8284FA">
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