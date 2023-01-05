import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('Pruebas en 07-deses-arr', () => {
  test('Debe de retornar un string y un numero', () => {
    //
    const [letters, numbers] = retornaArreglo();

    expect(letters).toBe('ABC'); //Si es igual a este string
    expect(numbers).toBe(123); //Si es igual a este numero

    expect(typeof letters).toBe('string'); //Tipo es string
    expect(typeof numbers).toBe('number'); //Tipo es number

    expect(letters).toStrictEqual(expect.any(String)); //Espera cualquier tipo string
    expect(numbers).toStrictEqual(expect.any(Number)); //Espera cualquier tipo de numero
  });
});
