import styled from 'styled-components'

const Input = styled.input`
  background: ${({ theme }) => theme.colors.primary};;
  color: ${({ theme }) => theme.colors.contrastText};
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  
  padding: 16px 16px;
  margin-bottom: 30px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
 

`;

export default Input;
