import { Header } from "../../components/Header"
import { TaskAdd } from "../../components/TaskAdd"
import { TaskList } from "../../components/TaskList"
import { TaskListHeader } from "../../components/TaskListHeader"
import { Container, Main } from "./styles"

export function Home() {
    return (
        <Container>
            <Header />

            <Main>
                <TaskAdd />

                <TaskListHeader />

                <TaskList />
            </Main>
        </Container>
    )
}