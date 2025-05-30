import { useEffect, useState } from "react";
import { getItems } from "../api/itemService";

type Item = { 
    id: number;
    name: string; 
    quantity: number; 
    price: number;
};

export default function ItemsPage() {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        getItems().then(setItems).catch((err) => console.error("Failed to load items", err));
    }, []);


    return (
        <div>
            <h1>Inventory Items</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                    <strong>{item.name}</strong> - Qty: {item.quantity} = ${item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}