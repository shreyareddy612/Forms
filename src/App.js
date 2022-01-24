import React, {useState} from 'react';
import { nanoid } from 'nanoid';
import "./App.css";
import data from "./mock-data.json";

const App = () => {

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) =>{
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
  return (
  <div className = "app-container">
    <table>
      <thead>
        <tr>
          <th>Column name</th>
          <th>Column type</th>
          <th>Label</th>
          <th>Input type</th>
          <th>required</th>
        </tr>
      </thead>

      <tbody>
      {contacts.map((contact)=> (
        <tr>
          <td><input class="check-box" type="checkbox"></input> &nbsp; {contact.fullName}</td>
          <td>{contact.address}</td>
          <td>{contact.phoneNumber}</td>
          <td>{contact.email}.com</td>
          <td>{contact.required} <center><input class="check-box" type="checkbox"></input></center></td>
        </tr>
      ))}
      </tbody>
    </table>

    <h2>Add a New Column</h2>
    <form onSubmit={handleAddFormSubmit}>
      <input
        type ="text" 
        name ="fullName"
        required = "required"
        placeholder="Enter Column name"
        onChange={handleAddFormChange}
      /> 
      <input
        type ="text" 
        name ="address"
        required = "required"
        placeholder="Enter column type"
        onChange={handleAddFormChange}
      /> 
      <input
        type ="text" 
        name ="phoneNumber"
        required = "required"
        placeholder="enter label type"
        onChange={handleAddFormChange}
      /> 
      <input
        type ="email" 
        name ="email"
        required = "required"
        placeholder="enter input type"
        onChange={handleAddFormChange}
      />  
      <button type = "submit"> Add </button>
    </form>

    <div> <button class="button-style" type = "submit"> Generate Form </button> 
    </div>
    
  </div>
  
  );

};

export default App;
