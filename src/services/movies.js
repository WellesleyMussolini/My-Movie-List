import api from "../config/api";

const movies = {
    get: async (service, category, pageNumber) => {
        return api.get(`/${service}/${category}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageNumber}`);
    },
    getById: async (service, movieID) => {
        return api.get(`/${service}/${movieID}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    },
};

export default movies;