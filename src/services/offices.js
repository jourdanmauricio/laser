const BACKEND = import.meta.env.BACKEND;
const URL = import.meta.env.URL;

export const getOffices = async () => {
  let offices2 = [];
  try {
    const res = await fetch(`${BACKEND}/offices`, {
      headers: { 'Content-Type': 'application/json', url: URL },
    });
    if (res.status !== 200) {
      console.log('Error GET Offices: ', res.status, res.statusText);
    }
    offices2 = await res.json();
  } catch (error) {
    console.log('ERROR DE CONEXION. Contacte al administrador!!!!', error);
  }

  return offices2;
};
