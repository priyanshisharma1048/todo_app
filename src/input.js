import React from 'react';

function Input(props) {
  return (
    <div>
      <label>
        First name:{" "}
        <input
          name="firstName"
          value={props.newUser.firstName}
          onChange={(e) => props.handleOnchange(e)}
          required
        />
      </label>
      <hr />
      <label>
        Last name:{" "}
        <input
          name="lastName"
          value={props.newUser.lastName}
          onChange={(e) => props.handleOnchange(e)}
          required
        />
      </label>
      <hr />
      <label>
        Age:{" "}
        <input
          type="number"
          name="age"
          value={props.newUser.age}
          onChange={(e) => props.handleOnchange(e)}
          required
        />
      </label>
      <hr />
      <label>
        Designation:{" "}
        <input
          name="designation"
          value={props.newUser.designation}
          onChange={(e) => props.handleOnchange(e)}
          required
        />
      </label>
      <hr />
      <label>
        Gender:{" "}
        <select
          name="gender"
          value={props.newUser.gender}
          onChange={(e) => props.handleOnchange(e)}
          required
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <hr />
      <label>
        Email:{" "}
        <input
          type="email"
          name="email"
          value={props.newUser.email}
          onChange={(e) => props.handleOnchange(e)}
          required
        />
      </label>

      {props.editingUser ? (
        <button onClick={props.handleUpdateUser}>Update User</button>
      ) : (
        <button onClick={props.handleSubmit}>Add User</button>
      )}
    </div>
  );
}

export default Input;
