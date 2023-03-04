import { Trash } from "phosphor-react-native"
import {
  Container,
  TaskItem,
  TaskStatus,
  Description,
  TaskButton
} from "./styles"

export function TaskList() {
  return (
    <Container>
      <TaskItem>
        <TaskStatus />

        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita optio cum eum nemo delectus. Itaque, at. Debitis, alias? Nobis alias perspiciatis commodi optio obcaecati harum corrupti possimus laborum? Explicabo, nihil.
        </Description>

        <TaskButton>
          <Trash size={20} color="#808080" />
        </TaskButton>
      </TaskItem>

      <TaskItem>
        <TaskStatus />

        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita optio cum eum nemo delectus. Itaque, at. Debitis, alias?
        </Description>

        <TaskButton>
          <Trash size={20} color="#808080" />
        </TaskButton>
      </TaskItem>

      <TaskItem>
        <TaskStatus />

        <Description>
          Lorem ipsum dolor sit amet consectetur xpl elit.
        </Description>

        <TaskButton>
          <Trash size={20} color="#808080" />
        </TaskButton>
      </TaskItem>
    </Container>
  )
}