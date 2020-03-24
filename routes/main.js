const express = require('express');
const router = express.Router();

// home
router.get('/', (req,res) => {
    res.send('Home page');
});

module.exports = router;