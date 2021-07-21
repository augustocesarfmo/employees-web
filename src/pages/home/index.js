import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Table from './components/Table';
import Button from '@material-ui/core/Button';
import AddEmployeeModal from './components/AddEmployeeModal';
import UpdateEmployeeModal from './components/UpdateEmployeeModal';
import { v4 as uuidv4 } from 'uuid';

// import { Container } from './styles';

const initialData = [
  { name: 'Augusto', last_name: 'Ferreira', email: 'augusto@gmail.com', uuid: uuidv4() },
  { name: 'Gustavo', last_name: 'Miranda', email: 'gustavo@gmail.com', uuid: uuidv4() },
  { name: 'Marília', last_name: 'Oliveira', email: 'marilia@gmail.com', uuid: uuidv4() }
];

function Home() {
  const [data, setData] = useState(initialData);
  const [tmpEmployee, setTmpEmployee] = useState({});

  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  function handleAddEmployee(emplyoee) {
    setData([...data, { ...emplyoee, uuid: uuidv4() }])
  }

  function handleDeleteEmployee(emplyoee) {
    const tmpData = data.filter(row => row.uuid !== emplyoee.uuid);

    setData(tmpData);
  }

  function handleEditEmployee(employee) {
    setTmpEmployee(employee);
    setEditOpen(true);
  }

  function handleUpdateEmployee(employee) {
    const tmpData = data.map(row => (row.uuid === employee.uuid ? employee : row ));
    
    setData(tmpData);
  }

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Employees List
      </Typography>

      <Button variant="contained" color="primary" onClick={() => setOpen(true)} >
        Add Employee
      </Button>

      <Table data={data} handleDeleteEmployee={handleDeleteEmployee} handleEditEmployee={handleEditEmployee} />

      <AddEmployeeModal open={open} handleClose={() => setOpen(false) } handleAddEmployee={handleAddEmployee} />
      <UpdateEmployeeModal employee={tmpEmployee} open={editOpen} handleClose={() => setEditOpen(false) } handleUpdateEmployee={handleUpdateEmployee} />
    </div>
  );
}

export default Home;