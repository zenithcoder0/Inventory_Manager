import { useEffect, useState } from "react";
import { getItems } from "../api/itemService";
import { type ColumnsDefinition, DynamicTable } from "../components/Table";

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

     const columns = [
    { header: "ID", key: "id" },
    { header: "Name", key: "name" },
    { header: "Quantity", key: "quantity", align: "right" },
    { header: "Price", key: "price", align: "right" },
] satisfies ColumnsDefinition<Item>[];

    return (
        <DynamicTable<Item> title="Inventory Items" data={items} columns={columns} />
    );
}