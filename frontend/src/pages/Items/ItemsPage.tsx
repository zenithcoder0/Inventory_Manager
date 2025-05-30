import { useEffect, useState } from "react";
import { getItems, postItem } from "../../api/itemService";
import { type ColumnsDefinition, DynamicTable } from "../../components/Table";
import { DynamicButton } from "../../components/Button";
import { AddInventoryDialog } from "./AddInventoryModal";

export type Item = { 
    id: number;
    name: string; 
    quantity: number; 
    price: number;
};

export default function ItemsPage() {
    const [items, setItems] = useState<Item[]>([]);
    const [modalOpen, setModalOpen] = useState(false);

    const handleAddItem = async (item: Omit<Item, "id">) => {
        await postItem(item);
        const updated = await getItems();
        setItems(updated);
    };

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
        <>

            <DynamicButton onClick={() => setModalOpen(true)} label="Add Item" />
            <DynamicTable<Item> title="Inventory Items" data={items} columns={columns} />
            <AddInventoryDialog 
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleAddItem}
            />
        </>
);
}

