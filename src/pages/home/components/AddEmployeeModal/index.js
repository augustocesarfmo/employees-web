import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '../Input';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Form } from '@unform/web'

export default function FormDialog({ open, handleClose, handleAddEmployee }) {
  const formRef = useRef();

  function handleFormSubmit(data) {
    handleAddEmployee(data);
    handleClose();
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth='sm' fullWidth>
        <Form ref={formRef} onSubmit={handleFormSubmit}>
          <DialogTitle id="form-dialog-title">Add Employee</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Fill in the fields below and click on the "ADD" button to add a new employee to your list.
            </DialogContentText>

            <TextField
              autoFocus
              margin="dense"
              name="name" // Unform
              label="Emplyoee First Name"
              fullWidth
            />
            <TextField
              margin="dense"
              name="last_name" // Unform
              label="Emplyoee Last Name"
              fullWidth
            />
            <TextField
              margin="dense"
              name="email" // Unform
              label="Email"
              fullWidth
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Add
            </Button>
          </DialogActions>
        </Form>
      </Dialog>
    </div>
  );
}
