import {axiosService} from "./axios.service";
import {urls} from "../constants";


export const movieService = {
    getAll: () => axiosService.get(urls.movies).then(value => value.data),
    getById: (id)=> axiosService.get(`${urls.movies}/${id}`).then(value => value.data)
}