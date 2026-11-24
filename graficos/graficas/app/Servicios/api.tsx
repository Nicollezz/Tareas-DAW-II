import axios from "axios";

const API_URL = "http://localhost:5000";

export const fetchContarProductos = async () => {
    const response = await axios.get(`${API_URL}/contar-productos`);
    return response.data;
};

export const fetchSumaValor = async () => {
    const response = await axios.get(`${API_URL}/suma-valor`);
    return response.data;
};

export const fetchPromedioValor = async () => {
    const response = await axios.get(`${API_URL}/promedio-valor`);
    return response.data;
};

export const fetchValorMaximo = async () => {
    const response = await axios.get(`${API_URL}/valor-maximo`);
    return response.data;
};

export const fetchValorMinimo = async () => {
    const response = await axios.get(`${API_URL}/valor-minimo`);
    return response.data;
};

export const fetchContarPorMoneda = async () => {
    const response = await axios.get(`${API_URL}/contar-por-moneda`);
    return response.data;
};

export const fetchPromedioPorMoneda = async () => {
    const response = await axios.get(`${API_URL}/promedio-por-moneda`);
    return response.data;
};

export const fetchSumaPorTipo = async () => {
    const response = await axios.get(`${API_URL}/suma-por-tipo`);
    return response.data;
};

export const fetchMaxMinPorTipo = async () => {
    const response = await axios.get(`${API_URL}/max-min-por-tipo`);
    return response.data;
};

export const fetchPromedioPorCategoria = async () => {
    const response = await axios.get(`${API_URL}/promedio-por-categoria`);
    return response.data;
};

export const fetchContarPorEstado = async () => {
    const response = await axios.get(`${API_URL}/contar-por-estado`);
    return response.data;
};

export const fetchSumaPorMarca = async () => {
    const response = await axios.get(`${API_URL}/suma-por-marca`);
    return response.data;
};

export const fetchContarPorCodigo = async () => {
    const response = await axios.get(`${API_URL}/contar-por-codigo`);
    return response.data;
};

export const fetchPromedioCantidadPorLinea = async () => {
    const response = await axios.get(`${API_URL}/promedio-cantidad-por-linea`);
    return response.data;
};

export const fetchMaximoPorPlanificador = async () => {
    const response = await axios.get(`${API_URL}/maximo-por-planificador`);
    return response.data;
};