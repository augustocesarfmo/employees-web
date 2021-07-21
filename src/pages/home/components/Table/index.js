import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DenseTable({ data, handleDeleteEmployee, handleEditEmployee }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Employee First Name</TableCell>
            <TableCell align="right">Employee Last Name</TableCell>
            <TableCell align="right">Employee Email Id</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.uuid}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right" >
                {row.last_name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">
                <Button variant="contained" color="primary" onClick={() => handleEditEmployee(row)} >
                  Update
                </Button>

                <Button variant="contained" color="secondary" onClick={() => handleDeleteEmployee(row)} >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
