/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

// I dont think we even need this route.
const userQueries = require('../db/queries/users.js');
// Get user details
router.get('/', (req, res) => {

  const userId = 1;
  // const userId = req.cookies.user_id;

  // if (!req.cookies || !req.cookies.user_id) {
  //   return res.status(401).json({ message: 'Please sign up or log in to create lists.' });
  // }

  userQueries
    .getUsers(userId)
    .then((user) => {
      res.send({ user });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// Update User Details

// curl test: curl -X PATCH -H "Content-Type: application/json" -d '{"name": "NewUserName", "email": "newemail@example.com"}' http://localhost:8080/api/users/5

router.patch('/:id', (req, res) => {

  // const userId = req.cookies.user_id;

  // if (!req.cookies || !req.cookies.user_id) {
  //   return res.status(401).json({ message: 'Please sign up or log in to create lists.' });
  // }

  const userId = 1;

  const userName = req.body.name;
  const userEmail = req.body.email;


  userQueries
    .updateUser(userId, userName, userEmail)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

module.exports = router;
