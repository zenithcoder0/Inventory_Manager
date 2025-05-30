import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Typography,
} from "@mui/material";


export type ColumnsDefinition<T> = {
    header: string;
    key: keyof T;
    align?: "left" | "right" | "center";
};

type Props<T> = {
    title?: string;
    data: T[];
    columns: ColumnsDefinition<T>[];
};


export const DynamicTable = <T,>({title,data,columns} : Props<T>) => {
    return (
        <TableContainer>
            {title && (
                <Typography variant="h5" align="center" gutterBottom>
                    {title}
                </Typography>
            )}
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map((col) => (
                            <TableCell key={String(col.key)} align={col.align || "left"}>
                            <strong>{col.header}</strong>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {columns.map((col) => (
                            <TableCell key={String(col.key)} align={col.align || "left"}>
                                {String(row[col.key])}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};