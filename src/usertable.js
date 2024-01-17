import "./App.css";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';


function Table(props) {

  return (
    <>
    <div className="table-container">      
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Designation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {props.user.map((item, index) => (
            <tr key={index}>
            <td>{item.id}</td>
               <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.age}</td>
              <td>{item.designation}</td>
              <td>
              
                  <Button
                  onClick={() => props.handleEditUser(item)}
                  variant="outlined"
                  startIcon={<EditIcon />}
                >
                  Edit
                </Button>
                 
                  <Stack direction="row" spacing={2}>
                    
                    <Button
                      onClick={() => props.handleDeleteUser(item.id)}
                      variant="outlined"
                      endIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                  </Stack>
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Table;