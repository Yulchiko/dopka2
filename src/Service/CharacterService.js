import axiosService from "./axios.service";
const urls = {
    character: '/character',
}

export const CharacterService = {
    getAllData: () => axiosService.get(urls.character).then(value => value.data),
    getByIdData: (id) => axiosService.get(`${urls.character}/${id}`).then(value => value.data)
};