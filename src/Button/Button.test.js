// Button.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

test('deve exibir "Clique abrir a porta" e mudar para "A porta esta aberta!" quando o botão for clicado', () => {
  render(<Button text="Clique abrir a porta" />);

  const buttonElement = screen.getByText(/Clique abrir a porta/i);
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);

  const updatedButton = screen.getByText(/A porta esta aberta!/i);
  expect(updatedButton).toBeInTheDocument();
});