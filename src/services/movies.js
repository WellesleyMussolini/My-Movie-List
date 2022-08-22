import api from "../config/api";

export const getTopRatedMovies = async (service, category, pageNumber) => {
    return api.get(`/${service}/${category}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageNumber}`);
};