import styled from "styled-components/native"

interface TextProps {
  color?: string
}

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
`

export const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text<TextProps>`  
  font-size: 14px;
  font-weight: 700;
  color: ${({ color }) => color ? color : '#D9D9D9'};
`

export const NumberWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  padding: 2px 8px;
  background: #333333;
  border-radius: 999999px;  
`

export const TitleNumber = styled.Text`
  color: #D9D9D9;
  font-weight: 700;
  font-size: 12px;
`