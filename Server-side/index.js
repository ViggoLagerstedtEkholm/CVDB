const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = mysql.createPool({
    host: 'localhost',
    user: 'SYSDBA',
    password: 'masterkey',
    database: 'cvdb',
});

//    const sqlInsert = "INSERT INTO Persons (PersonID,FirstName,LastName, Address, City) VALUES (2, 'Adam','Eriksson', 'Vägen 1', 'Danderyd')";
//db.query(sqlInsert, (err, result) => {
    // res.send('Hello!');
//})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/get', (req, res)=>{
    const sqlSelect = "SELECT * FROM Persons";
    db.query(sqlSelect,(err, result) =>{
        res.send(result);
    });
})

app.post("/api/insert", (req, res) =>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const adress = req.body.adress;
    const city = req.body.city;

    console.log("FN: " + firstName);
    console.log("LN: " + lastName);
    console.log("ADRESS: " + adress);
    console.log("CITY: " + city);

    const sqlInsert = "INSERT INTO Persons (FirstName,LastName, Address, City) VALUES (?,?,?,?)";
    db.query(sqlInsert, [firstName, lastName, adress, city], (err, result) =>{
        //console.log(result)
    });
});

app.listen(3001, () => {
    console.log("Running on port 3001");
});