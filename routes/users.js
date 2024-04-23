var express = require('express');
var router = express.Router();

var users = [
  {
    id: 1,
    name: 'John',
    email: '<EMAIL>'
  },
  {
    id: 2,
    name: 'Maria',
    email: '<EMAIL>'
  },
];

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(users);
});

/* POST new user. */
router.post('/', function (req, res, next) {
  var newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

/* PUT/PATCH update user. */
router.put('/:id', function (req, res, next) {
  var userId = parseInt(req.params.id);
  var updatedUser = req.body;
  for (var i = 0; i < users.length; i++) {
    if (users[i].id === userId) {
      users[i] = updatedUser;
      return res.status(200).json(updatedUser);
    }
  }
  res.status(404).send('User not found');
});

/* DELETE user. */
router.delete('/:id', function (req, res, next) {
  var userId = parseInt(req.params.id);
  for (var i = 0; i < users.length; i++) {
    if (users[i].id === userId) {
      users.splice(i, 1);
      return res.status(200).send('User deleted successfully');
    }
  }
  res.status(404).send('User not found');
});

module.exports = router;
