var User = require('../models/user');


/* GET all users. */
var GetAllUsers = function (req, res) {
    User.find({}, (err, users) => {
        if (err) res.status(500).send(error)

        res.status(200).json(users);
    });
};

/* Get user by Id */
var GetUserById = function (req, res) {
    User.findById(req.params.id, (err, users) => {
        if (err) res.status(500).send(error)

        res.status(200).json(users);
    });
};

/* Create a user. */
var AddNewUser = function (req, res) {
    let user = new User({
        name: req.body.name,
        age: req.body.age
    });

    user.save(error => {
        if (error) res.status(500).send(error);

        res.status(201).json({
            message: 'User created successfully'
        });
    });
}


module.exports = {
    GetAllUsers: GetAllUsers,
    GetUserById: GetUserById,
    AddNewUser: AddNewUser
}
