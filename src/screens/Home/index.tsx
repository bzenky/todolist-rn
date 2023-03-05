import { useEffect, useState } from "react"
import { Text } from "react-native"
import { Header } from "../../components/Header"
import { TaskAdd } from "../../components/TaskAdd"
import { TaskList } from "../../components/TaskList"
import { TaskListHeader } from "../../components/TaskListHeader"
import { getAllTasks } from "../../storage/getAllTasks"
import { TaskProps } from "../../storage/taskDTO"
import { Container, Main } from "./styles"

export function Home() {
    const [tasks, setTasks] = useState<TaskProps[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const taskListLength = tasks.length
    const taskListDoneLength = tasks.filter(task => task.done).length

    async function fetchTasks() {
        setIsLoading(true)
        const data = await getAllTasks()
        setTasks(data)

        setIsLoading(false)
    }

    useEffect(() => {
        fetchTasks()
    }, [])

    return (
        <Container>
            <Header />

            <Main>
                <TaskAdd
                    setTasks={setTasks}
                />

                <TaskListHeader
                    taskListLength={taskListLength}
                    taskListDoneLength={taskListDoneLength}
                />

                {isLoading
                    ? <Text style={{ color: '#fff' }}>Loading...</Text>
                    : (
                        <>

                            <TaskList
                                tasks={tasks}
                                setTasks={setTasks}
                            />
                        </>
                    )}
            </Main>
        </Container>
    )
}