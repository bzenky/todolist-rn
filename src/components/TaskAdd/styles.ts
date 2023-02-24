import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  gap: 12px;
  margin-top: -26px;
`

export const Input = styled.TextInput`
  flex: 1;
  margin-right: 4px;
  height: 54px;
  background: #262626;
  color: #F2F2F2;
  padding: 16px;
  border-radius: 6px;
  border: 1px solid #0D0D0D;
`

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 54px;
  background: #1E6F9F;
  border-radius: 6px;
  border: 1px solid #1E6F9F;
`