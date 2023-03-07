import styled, { css } from "styled-components/native"

interface TaskStatusProps {
  done: boolean
}

export const Container = styled.View`
  margin-top: 18px;
`

export const TaskItem = styled.TouchableOpacity`
  ${({ theme }) => css`
    background: ${theme.COLORS.GRAY_500};
    border: 1px solid ${theme.COLORS.GRAY_400};
  `}
  flex-direction: row;
  align-items: center;
  padding: 12px 8px 12px 12px;
  margin-bottom: 8px;
  border-radius: 8px;
`

export const TaskStatus = styled.View<TaskStatusProps>`
  ${({ theme, done }) => css`
    border: 2px solid ${done ? theme.COLORS.PURPLE_DARK : theme.COLORS.BLUE};
    background: ${done ? theme.COLORS.PURPLE_DARK : 'transparent'};
  `}
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
`

export const Description = styled.Text<TaskStatusProps>`
  ${({ theme, done }) => css`
    color: ${done ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    text-decoration: ${done ? 'line-through' : 'none'};
  `}
  flex: 1;
  margin: 0 8px;
`

export const TaskButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
`