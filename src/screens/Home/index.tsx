import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { TaskAdd } from "../../components/TaskAdd"
import { TaskList } from "../../components/TaskList"
import { TaskListHeader } from "../../components/TaskListHeader"
import { getAllTasks } from "../../storage/getAllTasks"
import { TaskProps } from "../../storage/taskDTO"
import { Container, Main } from "./styles"

export function Home() {
    const [tasks, setTasks] = useState<TaskProps[]>([])
    const taskListLength = tasks.length
    const taskListDoneLength = tasks.filter(task => task.done).length

    async function fetchTasks() {
        const data = await getAllTasks()
        setTasks(data)
    }

    useEffect(() => {
        fetchTasks()
    }, [])

    return (
        <Container>
            <Header />

            <Main>
                <TaskAdd
                    fetchTasks={fetchTasks}
                />

                <TaskListHeader
                    taskListLength={taskListLength}
                    taskListDoneLength={taskListDoneLength}
                />

                <TaskList tasks={tasks} />
            </Main>
        </Container>
    )
}