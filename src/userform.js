import React, { useState, useEffect } from 'react';
import Table from './usertable.js';
import "./App.css";
import Input from './input.js'


function Form() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    age: "",
    designation: ""
  });
const[formVisibility,setFormVisibility]=useState(false);
  useEffect(() => {
    const storedUsers = localStorage.getItem('data');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(users));
  }, [users]);

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
// function handleOnchange(event) {
//     setNewUser({
//       ...users,
//       [event.target.name]: event.target.value,
//     });
//   }

  const handleSubmit = () => {
    if (localStorage.getItem("lastid") === null) {
        localStorage.setItem("lastid", "0");
      }
  
      const lastId = parseInt(localStorage.getItem("lastid"));
      const newId = lastId + 1;
  
    if (newUser.firstName && newUser.lastName) {
      setUsers((prevUsers) => [...prevUsers, { ...newUser, id: newId }]);
      localStorage.setItem("lastid", newId);
      setNewUser({  id: "",
      firstName: "",
      lastName: "",
      age: "",
      designation: ""});
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setNewUser(user);
  };

  const handleUpdateUser = () => {
    if (newUser.firstName && newUser.lastName) {
        debugger
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === editingUser.id ? newUser : user))
      );
      setEditingUser(null);
      setNewUser({ id: "",
      firstName: "",
      lastName: "",
      age: "",
      designation: "" });
    }
  };

  const handleDeleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };
const handleButtonClick=()=>{
    

    setFormVisibility(true);


}
if(formVisibility){
    return (
        <div>
    
        <Input newUser={newUser} handleUpdateUser={handleUpdateUser} handleSubmit={handleSubmit} handleOnchange={handleOnchange} editingUser={editingUser}/>
    
          <Table user={users} handleEditUser={handleEditUser} handleDeleteUser={handleDeleteUser} />
        </div>
        
      );
    }
      else{
        return (
            <div>
                <button onClick={handleButtonClick}>New Entry</button>
        
            
              <Table user={users} handleEditUser={handleEditUser} handleDeleteUser={handleDeleteUser} />
            </div>
            
          );
        }
      
}

 
   

export default Form;
