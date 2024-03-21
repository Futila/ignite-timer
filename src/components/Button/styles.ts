import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'gray',
  secondary: 'yellow',
  success: 'green',
  danger: 'red',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  background: ${(props) => buttonVariants[props.variant]};
  color: ${(props) => props.theme['gray-100']};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  margin: 10px;
`

// Continuar com a configuração inicial da aplicação
