import styled from "styled-components/native"

export const Container = styled.View`
  margin-top: 18px;
`

export const TaskItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  margin-bottom: 8px;
  background: #262626;
  border: 1px solid #333333;
  border-radius: 8px;
`

export const TaskStatus = styled.View`
  width: 18px;
  height: 18px;
  border-radius: 10px;
  border: 2px solid #4EA8DE;
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
  width: 24px;
  height: 24px;
`