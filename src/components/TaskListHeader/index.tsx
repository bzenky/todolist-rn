import { Container, NumberWrapper, Title, TitleNumber, TitleWrapper } from "./styles";

export function TaskListHeader() {
  return (
    <Container>
      <TitleWrapper>
        <Title color="#4EA8DE">
          Criadas
        </Title>

        <NumberWrapper>
          <TitleNumber>
            0
          </TitleNumber>
        </NumberWrapper>
      </TitleWrapper>

      <TitleWrapper>
        <Title color="#8284FA">
          Concluídas
        </Title>

        <NumberWrapper>
          <TitleNumber>
            0
          </TitleNumber>
        </NumberWrapper>
      </TitleWrapper>
    </Container>
  )
}