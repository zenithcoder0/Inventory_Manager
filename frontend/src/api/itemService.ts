import axios from "axios";
import { type Item } from "../pages/Items/ItemsPage";

const API_BASE = "https://localhost:7237/api";

export async function getItems() {
    const response = await axios.get(`${API_BASE}/items`);
    return response.data;
}


export const postItem = (item: Omit<Item, "id">): Promise<Item> =>
  axios.post(`${API_BASE}/items`, item).then((res) => res.data);