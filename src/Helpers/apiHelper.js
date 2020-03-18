const API_URL = 'https://swapi.co/api';

export const doGetRequest = path => {
  const url = `${API_URL}${path}`;
  return fetch(url).then(response => response.json());
};
