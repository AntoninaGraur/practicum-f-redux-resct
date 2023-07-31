
const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = '3b6841950ab341e6808fce766b94592d';

export const getNews = searchText => {
  return fetch(`${BASE_URL}/everything?q=${searchText}`, {
    headers: {
      'X-Api-Key': API_KEY,
    },
  })
};