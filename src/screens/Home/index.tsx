import { Header } from "../../components/Header"
import { TaskAdd } from "../../components/TaskAdd"
import { Container, Main } from "./styles"

export function Home() {
    return (
        <Container>
            <Header />

            <Main>
                <TaskAdd />
            </Main>
        </Container>
    )
}