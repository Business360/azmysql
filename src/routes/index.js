const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

// Serve the index.html file
router.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
});


// Route to handle form submission
router.post('/', formController.submitForm);

// Wildcard route to handle all other requests
router.get('*', (req, res) => {
    res.status(404).sendFile('not-found.html', { root: 'public' });
});

module.exports = router;
