import axios from "axios";
import User from "../models/user";

export const API = axios.create({
  baseURL: "http://localhost:8585/api/user"
});


export const addUser = (newUser: User) => API.post("", newUser);
export const deleteUser = (id: number) => API.delete(`/${id}`);
export const getAllUsers = () => API.get("/users");
export const getUserById = (id: number) => API.get(`/${id}`)
export const updateUser = (user: User) => API.put(`/${user.id}`, user)