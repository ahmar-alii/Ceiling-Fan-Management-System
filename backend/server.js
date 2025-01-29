const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ceilingFans"
});

// Check database connection
db.connect((err) => {
    if (err) {
        console.log("Error connecting to the database: ", err);
    } else {
        console.log("Connected to the database");
    }
});

// DELETE route for removing a fan by id
app.delete("/deletefan/:id", (req, res) => {
    const sql = "DELETE FROM Fans WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) {
            console.error("Error deleting data: ", err);
            return res.json("There is an error");
        }
        return res.json(data);
    });
});

// GET route for fetching all fans
app.get("/", (req, res) => {
    const sql = "SELECT * FROM Fans";
    db.query(sql, (err, data) => {
        if (err) return res.json("There is an error");
        return res.json(data);
    });
});

// POST route for adding a new fan
app.post("/addprd", (req, res) => {
    const sql = `
        INSERT INTO Fans (
            Company, 
            Model, 
            Size, 
            WaterProof, 
            Shape, 
            Price, 
            Color, 
            WarrantyStart, 
            WarrantyEnd
        ) VALUES (?)`;

    const values = [
        req.body.Company,
        req.body.Model,
        req.body.Size,
        req.body.WaterProof,
        req.body.Shape,
        req.body.Price,
        req.body.Color,
        req.body.WarrantyStart,
        req.body.WarrantyEnd,
    ];

    db.query(sql, [values], (err, data) => {
        if (err) {
            console.error("Error inserting data: ", err);
            return res.json("There is an error");
        }
        return res.json(data);
    });
});

// PUT route for updating a fan
app.put("/updateproduct/:id", (req, res) => {
    const id = req.params.id;
    const sql = `
        UPDATE Fans 
        SET 
            Company = ?, 
            Model = ?, 
            Size = ?, 
            WaterProof = ?, 
            Shape = ?, 
            Price = ?, 
            Color = ?, 
            WarrantyStart = ?, 
            WarrantyEnd = ? 
        WHERE id = ?`;

    const values = [
        req.body.Company,
        req.body.Model,
        req.body.Size,
        req.body.WaterProof,
        req.body.Shape,
        req.body.Price,
        req.body.Color,
        req.body.WarrantyStart,
        req.body.WarrantyEnd,
        id,
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error("Error updating data: ", err);
            return res.json("There is an error");
        }
        return res.json(data);
    });
});

// GET route for fetching a single fan by id
app.get("/singlefan/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM Fans WHERE id = ?";
    db.query(sql, [id], (err, data) => {
        if (err) return res.json("There is an error");
        return res.json(data[0]);
    });
});

app.listen(8080, () => {
    console.log("Server listening on port 8080");
});
