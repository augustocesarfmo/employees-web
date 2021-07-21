import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '../Input';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Form } from '@unform/web'

export default function FormDialog({ employee, open, handleClose, handleUpdateEmployee }) {
  const formRef = useRef();

  function handleFormSubmit(data) {
    handleUpdateEmployee({ ...data, uuid: employee.uuid });
    handleClose();
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth='sm' fullWidth>
        <Form ref={formRef} onSubmit={handleFormSubmit} initialData={employee} >
          <DialogTitle id="form-dialog-title">Update Employee</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Change the values below and click the "UPDATE" button to update the values.
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
              Update
            </Button>
          </DialogActions>
        </Form>
      </Dialog>
    </div>
  );
}
