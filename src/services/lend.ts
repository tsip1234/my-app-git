import axios from "axios";
import Lend from "../models/lend";

export const API = axios.create({
  baseURL: "http://localhost:8585/api/book"
});

export const addLends = (newLend: Lend) => API.post("", newLend);
export const getALLALend = () => API.get("/lends");
export const getLendById = (id: number) => API.get(`/${id}`)
export const deleteLend = (id: number) => API.delete(`/${id}`)
export const updateLend = (lend: Lend) => API.put(`/${lend.id}`, lend);
