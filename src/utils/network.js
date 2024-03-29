export const getApiResource = async (url) => {
  try {
    const res = await fetch(url); // запрос к SWAPI

    if (!res.ok) {
      console.error("Could not fetch.", res.status);
      return false;
    }

    return await res.json(); // если нет ошибки возращаем body (promise)
  } catch (error) {
    console.error("Could not fetch.", error.message);
    return false;
  }
};

// getApiResource(SWAPI_ROOT + SWAPI_PEOPLE).then((body) => console.log(body));

// (async () => {
//   const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
//   console.log(body);
// })();
