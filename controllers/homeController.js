const data = require('../models/data');

exports.getHome = (req, res) => {
    res.render('index', { message: data.message });
};
