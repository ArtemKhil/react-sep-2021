import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const postService = {
    getUserById: (id) => axiosService.get(`${urls.posts}?userId=${id}`)
};