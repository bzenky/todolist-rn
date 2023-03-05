import { FlatList } from "react-native"
import { Check, Trash } from "phosphor-react-native"
import { TaskProps } from "../../storage/taskDTO"
import { removeTask } from "../../storage/removeTask"
import { EmptyTaskList } from "../EmptyTaskList"
import { toggleDoneTask } from "../../storage/toggleDoneTask"
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
  async function handleToggleTaskDone(id: string) {
    const response = await toggleDoneTask(id)
    setTasks(response)
  }

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
          <TaskItem onPress={() => handleToggleTaskDone(item.id)}>
            <TaskStatus done={item.done}>
              {item.done && <Check size={12} color="#fff" weight="bold" />}
            </TaskStatus>

            <Description>
              {item.task}
            </Description>

            <TaskButton onPress={() => handleRemoveTask(item.id)}>
              <Trash size={20} color="#808080" />
            </TaskButton>
          </TaskItem>
        )}
        ListEmptyComponent={<EmptyTaskList />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}