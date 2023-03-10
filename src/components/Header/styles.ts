import styled from "styled-components/native"

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 174px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Logo = styled.Image`
  width: 110px;
  height: 32px;
`