import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from "axios";

function App() {
  const [firstName, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [adress, setAdress] = useState('');
  const [city, setCity] = useState('');
  const [personList, setPersonList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) =>{
      setPersonList(response.data);
    })
  }, [])

  const submit = () => {
    Axios.post('http://localhost:3001/api/insert',{
      firstName: firstName,
      lastName: lastName,
      adress: adress,
      city: city,
    });
  };

  return (
    <div className="App">
      <h1>Hej!</h1>

      <div className="form">
        <label>name</label>
        <input type="text" name="name" onChange={(e) =>{
          setName(e.target.value);
        }}/>
        <br></br>
        <br></br>
        <label>last name:</label>
        <input type="text" name="lastName" onChange={(e) =>{
          setLastName(e.target.value);
        }}/>
        <br></br>
        <br></br>
        <label>adress:</label>
        <input type="text" name="adress" onChange={(e) =>{
          setAdress(e.target.value);
        }}/>
        <br></br>
        <br></br>
        <label>city:</label>
        <input type="text" name="city" onChange={(e) =>{
          setCity(e.target.value);
        }}/>

        <button onClick={submit}>Submit</button>
        {personList.map((val) =>{
          return <h1>First name: {val.FirstName}, Last name: {val.LastName}, Adress: {val.Address}, City: {val.City}</h1>
        })}
      </div>
    </div>
  );
  
}

export default App;
