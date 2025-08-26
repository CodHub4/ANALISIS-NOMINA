import axios from 'axios';

const API_URL = 'http://localhost:3000/api/empleados';

export const getEmpleados = () => axios.get(API_URL);
export const getEmpleadoById = (id) => axios.get(`${API_URL}/${id}`);
export const createEmpleado = (data) => axios.post(API_URL, data);
export const updateEmpleado = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteEmpleado = (id) => axios.delete(`${API_URL}/${id}`);

