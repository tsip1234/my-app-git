import axios from "axios";
import Category from "../models/category";

export const API = axios.create({
   baseURL: "http://localhost:8585/api/category"
});
export const addCategory = (newRent: Category) => API.post("", newRent);
export const getALLCategory = () => API.get("/categories");
export const getCategoryById = (id: number) => API.get(`/${id}`)
export const deleteCategory = (id: number) => API.delete(`/${id}`)
export const updateCategory = (rent: Category) => API.put(`/${rent.id}`, rent);
