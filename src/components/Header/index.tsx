import { Container, Logo } from "./styles"
import todoLogo from '../../assets/logo.png'

export function Header() {
  return (
    <Container>
      <Logo source={todoLogo} />
    </Container>
  )
}