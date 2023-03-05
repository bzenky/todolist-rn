import { FlatList } from "react-native"
import { Trash } from "phosphor-react-native"
import { TaskProps } from "../../storage/taskDTO"
import { removeTask } from "../../storage/removeTask"
import {
  Container,
  TaskItem,
  TaskStatus,
  Description,
  TaskButton
} from "./styles"

interface TaskListProps {
  tasks: TaskProps[]
  setTasks: (value: TaskProps[]) => void
}

export function TaskList({ tasks, setTasks }: TaskListProps) {
  async function handleRemoveTask(id: string) {
    const response = await removeTask(id)
    setTasks(response)
  }

  return (
    <Container>
      <FlatList
        data={tasks}
        keyExtractor={task => task.id}
        renderItem={({ item }) => (
          <TaskItem>
            <TaskStatus />

            <Description>
              {item.task}
            </Description>

            <TaskButton onPress={() => handleRemoveTask(item.id)}>
              <Trash size={20} color="#808080" />
            </TaskButton>
          </TaskItem>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}