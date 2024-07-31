import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

export const getAllGames = () => axios.get(`${API_BASE_URL}/games`);
export const getCategoriesByGameId = (gameId) => axios.get(`${API_BASE_URL}/games/${gameId}/categories`);
export const getOptionsByCategoryId = (categoryId) => axios.get(`${API_BASE_URL}/categories/${categoryId}/options`);



