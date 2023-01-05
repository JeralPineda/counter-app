import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe retornar un héroe por ID', () => {
    const id = 1;

    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
  });

  test('getHeroeById debe retornar undefined si no existe', () => {
    const id = 100;

    const hero = getHeroeById(id);

    expect(hero).toBe(undefined);
    expect(hero).toBeFalsy(); //✅ evaluar null, false, undefined
  });

  //Tarea:
  // Debe de retornar un arreglo con los héroes de DC
  // Length === 3
  // toEqual al arreglo filtrado
  test('Debe de retornar un arreglo con los héroes de DC', () => {
    const owner = 'DC';

    const data = getHeroesByOwner(owner);

    expect(data.length).toBe(3);

    expect(data).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' },
    ]);

    expect(data).toEqual(heroes.filter((hero) => hero.owner === owner)); //✅
  });

  // Debe de retornar un arreglo con los héroes de Marvel
  // length === 2

  test('Debe de retornar un arreglo con los héroes de Marvel', () => {
    const owner = 'Marvel';

    const data = getHeroesByOwner(owner);

    expect(data.length).toBe(2);

    expect(data).toEqual(heroes.filter((hero) => hero.owner === owner)); //✅
  });
});
