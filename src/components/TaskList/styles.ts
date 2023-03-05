import styled from "styled-components/native"

interface TaskStatusProps {
  done: boolean
}

export const Container = styled.View`
  margin-top: 18px;
`

export const TaskItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 12px 8px 12px 12px;
  margin-bottom: 8px;
  background: #262626;
  border: 1px solid #333333;
  border-radius: 8px;
`

export const TaskStatus = styled.View<TaskStatusProps>`
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  border-radius: 10px;
  border: 2px solid ${({ done }) => done ? '#5E60CE' : '#4EA8DE'};
  background: ${({ done }) => done ? '#5E60CE' : 'transparent'};
  transition: all 0.2s ease-in-out;
`

export const Description = styled.Text`
  flex: 1;
  color: #F2F2F2;
  font-size: 14px;
  font-weight: 400;
  margin: 0 8px;
`

export const TaskButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
`