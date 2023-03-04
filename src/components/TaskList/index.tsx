import { FlatList } from "react-native"
import { Trash } from "phosphor-react-native"
import { TaskProps } from "../../storage/taskDTO"
import {
  Container,
  TaskItem,
  TaskStatus,
  Description,
  TaskButton
} from "./styles"

interface TaskListProps {
  tasks: TaskProps[]
}

export function TaskList({ tasks }: TaskListProps) {
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

            <TaskButton>
              <Trash size={20} color="#808080" />
            </TaskButton>
          </TaskItem>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}