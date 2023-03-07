import styled, { css } from "styled-components/native"

interface TextProps {
  color?: string
}

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`

export const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text<TextProps>`
  ${({ theme, color }) => css`
    color: ${color ? color : theme.COLORS.GRAY_300};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`

export const NumberWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  padding: 2px 8px;
  background: ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 999999px;  
`

export const TitleNumber = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`