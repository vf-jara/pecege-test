import styled from 'styled-components';


interface ButtonProps {
    variant?: 'default' | 'green' | 'red';
  }

export const StyledButton = styled.button<ButtonProps>`
  width: 100%;
  max-width: 200px;;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 15px 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  /* Estilos padrão */
  background-color: #e8e8e8;
  color: #000000;


  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    box-shadow: none; 
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); 
  }

  /* Estilos para a variante 'green' */
  ${(props) =>
    props.variant === 'green' &&
    `
    background-color: rgb(2, 250, 85, 0.8);
  `}

  /* Estilos para a variante 'red' */
  ${(props) =>
    props.variant === 'red' &&
    `
    background-color: #f44336;
  `}
`;
