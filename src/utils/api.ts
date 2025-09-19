import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.API_URL || `https://apicalvaodecria-production.up.railway.app/api/v1`,
});
