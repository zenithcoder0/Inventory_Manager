import axios from "axios";

const API_BASE = "https://localhost:7237/api";

export async function getItems() {
    const response = await axios.get(`${API_BASE}/items`);
    return response.data;
}