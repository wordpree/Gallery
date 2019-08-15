import React from "react";
import Dialog from "@material-ui/core/Dialog";

export default function GridListsDialog({ open, close }) {
  return (
    <Dialog open={open} onClose={close}>
      hello from dialog
    </Dialog>
  );
}
