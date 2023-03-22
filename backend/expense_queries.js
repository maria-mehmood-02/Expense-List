const express = require('express');
const router = express.Router();
const conn = require('./connection');

router.use(express.json());

router.post('/add', (req, res) => {

    let data = {
        id: req.body.id,
        uid: req.body.uid,
        exp_name: req.body.exp_name,
        amount: req.body.amount,
        date: req.body.date,
    };

    let query = "INSERT INTO expenses SET ?";

    conn.query(query, data, (err, result) => {
        if (err) throw err;
        res.status(200).send({success: "Data inserted successfully"});
    });

});

router.get('/view', (req, res) => {
    
    let query = "SELECT * FROM expenses";

    conn.query(query, (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    });

});

router.get('/view/(:id)', (req, res) => {

    let id = req.params.id;
    
    let query = "SELECT * FROM expenses WHERE id = ?";

    conn.query(query, id, (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    });

});

router.put('/update/(:id)', (req, res) => {

    let id = req.params.id;

    let data = {
        exp_name: req.body.exp_name,
        amount: req.body.amount,
        date: req.body.date,
    };

    let query = "UPDATE expenses SET ? WHERE id = " + id;

    conn.query(query, data, (err, result) => {
        if (err) throw err;
        res.status(200).send({success: "Data updated successfully."});
    });

});

router.delete('/delete/(:id)', (req, res) => {

    let id = req.params.id;

    let query = "DELETE FROM expenses WHERE id = ?";

    conn.query(query, id, (err, result) => {
        if (err) throw err;
        res.status(200).send({success: "Data deleted successfully."});
    });

});

module.exports = router;