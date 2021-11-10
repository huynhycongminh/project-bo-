const express = require('express');
const route = express.Router()

const controller = require('../controller/controller');

route.all('/new_test_driver', controller.new_test_drive)

// API
route.post('/api/register_test_drive', controller.register_test_drive);

route.get('/api/cars/:id', controller.find_car)

route.get('/api/cars', controller.find_car)

route.get('/api/search', controller.search_car)

route.get('/get_data', controller.get_data)

route.post('/api/login', controller.login)


module.exports = route