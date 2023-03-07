import styled, { css } from "styled-components/native"

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  border-top-width: 1px;
  border-style: solid;
  border-top-color: ${({ theme }) => theme.COLORS.GRAY_400};
  padding-top: 48px;
`

export const BoldTitle = styled.Text`
${({ theme }) => css`
  color: ${theme.COLORS.GRAY_300};
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.MD}px;
`}
  margin-top: 16px;
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_300};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
`}`