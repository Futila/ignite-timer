import styled from "styled-components";

interface ButtonProps {
  variant: "primary" | "secondary" | "success" | "danger";
}

export const Button = styled.button<ButtonProps>`
  width: 100px;
  height: 40px;

  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["gray-100"]};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  margin: 10px;
`;

// Continuar com a configuração inicial da aplicação
