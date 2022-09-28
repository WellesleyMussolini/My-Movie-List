import api from "../config/api";

const movies = {
    get: async (route, category, pageNumber) => {
        return api.get(`/${route}/${category}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageNumber}`);
    },
    getById: async (route, movieID) => {
        return api.get(`/${route}/${movieID}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    },
    getLatest: async (route) => {
        return api.get(`/${route}/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    },
};

export default movies;