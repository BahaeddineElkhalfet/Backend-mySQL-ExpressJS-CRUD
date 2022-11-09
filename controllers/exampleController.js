var db = require('../models/')

module.exports = {
    getAll: (req, res) => {
        db.query('SELECT * FROM exampleTable', (err, result) => {
            if (err) res.status(500).send(err)
            else res.status(200).send(result)
        })
    }
}