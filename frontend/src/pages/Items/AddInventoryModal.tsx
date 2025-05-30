import { useState } from "react";
import { FormField } from "../../components/Form";
import { ModalFormDialog } from "../../components/Modal";

type InventoryForm = {
  name: string;
  quantity: number;
  price: number;
};

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (item: InventoryForm) => void;
};

export const AddInventoryDialog = ({ open, onClose, onSubmit }: Props) => {
  const [form, setForm] = useState<InventoryForm>({
    name: "",
    quantity: 0,
    price: 0,
  });

  const handleChange = <K extends keyof InventoryForm>(key: K, value: unknown) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    onSubmit(form);
    setForm({ name: "", quantity: 0, price: 0 }); // reset form
    onClose();
  };

  return (
    <ModalFormDialog
      open={open}
      title="Add Inventory Item"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <FormField
        values={form}
        onChange={handleChange}
        fields={[
          { name: "name", label: "Name" },
          { name: "quantity", label: "Quantity", type: "number" },
          { name: "price", label: "Price", type: "number" },
        ]}
      />
    </ModalFormDialog>
  );
};
