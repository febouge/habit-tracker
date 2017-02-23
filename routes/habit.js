const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ title: 'Habit' });
});

router.post('/new', function(req, res, next) {
  res.json({ title: 'Create new habit' });
});

router.put('/update', function(req, res, next) {
  res.json({ title: 'Modify existing habit' });
});

router.delete('/delete', function(req, res, next) {
  res.json({ title: 'Delete existing habit' });
});

module.exports = router;
