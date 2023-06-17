import axios from "axios";

const baseUrl = process.env.REACT_APP_URL;
const tokenUrl = process.env.REACT_APP_TOKEN;
export const getMovies = async() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${tokenUrl}`
        }
      };
    const movie = await axios.get(`${baseUrl}/trending/movie/day?language=en-US`, options);
    return movie.data.results;
}

export const searchMovie = async(q) => {
    const search = await axios.get(q);
    return search;
}