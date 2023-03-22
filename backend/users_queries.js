const express = require('express');
const router = express.Router();
const conn = require('./connection');

router.use(express.json());

router.post('/register', function (req, res) {

    let data = {
        id: req.body.id,
        fname: req.body.fname,
        lname: req.body.lname,
        email_address: req.body.email_address,
        password: req.body.password,
        contact_number: req.body.contact_number,
    };

    let query = "INSERT INTO users SET ?";
    // let query = "INSERT INTO users (id, fname, lname, email_address, password, contact_number) VALUES (?,?,?,?,?,?);";

    conn.query(query, data, (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    });

});

router.post('/login', (req, res) => {
    
    let data = {
        email_address: req.body.email_address,
        password: req.body.password
    };

    let query = "SELECT * FROM users WHERE email_address = ? AND password = ?";

    conn.query(query, [data['email_address'], data['password']], (err, result) => {
        if (err) throw err;
        res.status(200).send({success: "Login successful"});
    });

});

router.get('/view_all', (req, res) => {

    let query = "SELECT * FROM users";

    conn.query(query, (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    });

});

router.get('/view/(:id)', (req, res) => {

    let id = req.params.id;

    let query = "SELECT * FROM users WHERE id = ?";

    conn.query(query, id, (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    });

});

router.put('/update/(:id)', (req, res) => {

    let id = req.params.id;

    let data = {
        fname: req.body.fname,
        lname: req.body.lname,
        password: req.body.password,
    };

    let query = "UPDATE users SET ? WHERE id = " + id;

    conn.query(query, data, (err, result) => {
        if (err) throw err;
        res.status(200).send({success: "Data updated successfully."});
    });

});

router.delete('/delete/(:id)', (req, res) => {

    let id = req.params.id;

    let query = "DELETE FROM users WHERE id = ?";

    conn.query(query, id, (err, result) => {
        if (err) throw err;
        res.status(200).send({success: "Data deleted successfully."});
    });

});

module.exports = router;