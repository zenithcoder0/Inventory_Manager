import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { type ReactNode } from "react";

type Props = {
  open: boolean;
  title: string;
  onClose: () => void;
  onSubmit: () => void;
  children: ReactNode;
};

export const ModalFormDialog = ({ open, title, onClose, onSubmit, children }: Props) => (
  <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
    <DialogTitle>{title}</DialogTitle>

    <DialogContent dividers>{children}</DialogContent>

    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button variant="contained" onClick={onSubmit}>
        Submit
      </Button>
    </DialogActions>
  </Dialog>
);
