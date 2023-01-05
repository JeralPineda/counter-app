import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en <CounterApp />', () => {
  const value = 100;

  test('debe de hacer match con el snapshot', () => {
    const { container } = render(<CounterApp value={value} />);

    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el valor inicial de 100 <CounterApp value={100}', () => {
    render(<CounterApp value={value} />);
    expect(screen.getByText(value)).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100');
  });

  test('debe de incrementar con el botón +1', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText('101')).toBeTruthy();
  });

  test('debe de decrementar con el botón -1', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText('99')).toBeTruthy();
  });

  test('debe de funcionar el botón de reset', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    //  fireEvent.click(screen.getByText('Reset'));
    fireEvent.click(screen.getByRole('button', { name: 'Reset' }));

    expect(screen.getByText(5)).toBeTruthy();
  });
});
