import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Pruebas en 06-deses-obj', () => {
  test('useContext debe de retornar un objeto', () => {
    const nombre = 'Jeral';
    const edad = 27;
    const clave = 12345;

    const obj = {
      nombre,
      edad,
      clave,
    };

    const user = usContext({ clave, nombre, edad });

    expect(user).toStrictEqual({
      nombre,
      rango: 'Capitán',
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    });
  });
});
