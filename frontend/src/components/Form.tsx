import { Stack, TextField } from "@mui/material";

type FieldConfig<T> = {
  name: keyof T;
  label: string;
  type?: string;
};

type Props<T> = {
  values: T;
  onChange: (key: keyof T, value: unknown) => void;
  fields: FieldConfig<T>[];
};

export function FormField<T>({ values, onChange, fields }: Props<T>) {
  return (
    <Stack spacing={2} mt={1}>
      {fields.map((field) => (
        <TextField
          key={String(field.name)}
          label={field.label}
          type={field.type || "text"}
          value={values[field.name]}
          onChange={(e) => onChange(field.name, e.target.value)}
          fullWidth
        />
      ))}
    </Stack>
  );
}
