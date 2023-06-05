import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001'
});

export const getCarros = () => api.get('/carros');
export const createCarro = (carro) => api.post('/carros', carro);
export const updateCarro = (id, carro) => api.put(`/carros/${id}`, carro);

export default api;
