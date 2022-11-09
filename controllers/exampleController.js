var db = require("../models/");

module.exports = {
  // func to retrieve all data from the table selected in the query (exampleTable in this case)
  getAll: (req, res) => {
    let sqlQuery = "SELECT * FROM exampleTable";
    db.query(sqlQuery, (err, result) => {
      if (err) res.status(500).send(err);
      else res.status(200).send(result);
    });
  },
  // func to insert items in the database to the table selected in the query (exampleTable in this case)
  add: (req, res) => {
    let sqlQuery =
      "INSERT INTO exampleTable (example,description) values (?,?)";
    db.query(
      sqlQuery,
      [req.body.example, req.body.description],
      (err, result) => {
        if (err) res.status(500).send(err);
        else {
          console.log("item added successfully in your DB");
          res.status(200).send(result);
        }
      },
    );
  },
  // func delete data from the table selected in the query (exampleTable in this case)
  // We target the id because it's unique
  delete: (req, res) => {
    let id = req.params.id;
    let sqlQuery = `DELETE FROM exampleTable WHERE id=${id}`;
    db.query(sqlQuery, (err, result) => {
      if (err) res.status(500).send(err);
      else {
        console.log("item deleted successfully from your DB");
        res.status(200).send(result);
      }
    });
  },
  // func update data in the table selected in the query (exampleTable in this case)

  upDate: (req, res) => {
    let id = req.params.id;
    let data = {
      example: req.body.example,
      description: req.body.description,
    };
    let sqlQuery = `UPDATE  exampleTable SET ? WHERE id=?`;
    db.query(sqlQuery, [data, id], (err, result) => {
      if (err) res.status(500).send(err);
      else {
        console.log("item changed successfully from your DB");
        res.status(200).send(result);
      }
    });
  },
};
