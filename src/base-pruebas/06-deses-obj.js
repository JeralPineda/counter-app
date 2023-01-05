export const usContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {
  // console.log( nombre, edad, rango );

  return {
    nombre,
    rango,
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};
