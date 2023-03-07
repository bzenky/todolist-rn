import styled, { css } from "styled-components/native"

export const Container = styled.View`
  flex-direction: row;
  gap: 12px;
  margin-top: -26px;
`

export const Input = styled.TextInput`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    background: ${theme.COLORS.GRAY_500};
    border: 1px solid ${theme.COLORS.GRAY_700};
  `}
  flex: 1;
  margin-right: 4px;
  height: 54px;
  padding: 16px;
  border-radius: 6px;
`

export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    background: ${theme.COLORS.BLUE_DARK};
    border: 1px solid ${theme.COLORS.BLUE_DARK}; 
  `}
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 54px;
  border-radius: 6px;
`