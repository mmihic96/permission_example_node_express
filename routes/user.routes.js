const express = require('express');
const router = express.Router();
const controller = require('../services/user.services');
const access = require('../model/RBAC').getPermissionInstance();

// Get all users
router.get('/user/all', access.can("retrieve"), controller.getAllUsers);

module.exports = router