import { Button } from "@mui/material";

type DynamicButtonProps = {
    onClick: () => void;
    label?: string;
}

export const DynamicButton = ({ onClick, label}: DynamicButtonProps) => {
    return (
        <Button variant="contained" color="primary" onClick={onClick}>
            {label}
        </Button>
    );
}