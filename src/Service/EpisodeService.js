import axiosService from "./axios.service";
const urls = {
        episode: '/episode',
}
export const EpisodeService = {
    getAllData: (page = 1) => axiosService.get(urls.episode, {params: {page}}).then(value => value.data),
    getByIdData: (id) => axiosService.get(`${urls.episode}/${id}`).then(value => value.data)
};