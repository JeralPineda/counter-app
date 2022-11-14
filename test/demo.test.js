describe('Pruebas en <DemoComponent />', () => {
  test('Esta es una prueba inicial', () => {
    // 1. Inicializacion
    const message = 'Hola Mundo';

    // 2. Estimulo
    const message2 = message.trim();

    // 3. Observar el comportamiento... esperado
    expect(message).toBe(message2);
  });
});
