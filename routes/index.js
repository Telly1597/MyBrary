const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
    console.log(process.env.DATABASE_URL)
}) 


module.exports = router