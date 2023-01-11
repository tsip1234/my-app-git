import axios from "axios";
import Tool from "../models/tool";

export const API = axios.create({
    baseURL: "http://localhost:8585/api/tool"
});

export const createTool = (newTool: Tool) => API.post("", newTool);
export const fetchTools = () => API.get("/tools");//v
export const fetchSingleTool = (id: number) => API.get(`/${id}`)
export const deleteTool = (id: number) => API.delete(`/${id}`);
export const updateTool = (tool: Tool) => API.put(`/${tool.id}`, tool)


