const baseURL = 'https://api.themoviedb.org/3';

export const apiKey = '2a28400cce7b46c709d261d83d5b130a';

export const urls = {
    movies: `/discover/movie?api_key=${apiKey}`,
    genres: `/genre/movie/list?api_key=${apiKey}`
};


export default baseURL;