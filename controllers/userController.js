const userModel = require('../models/userModel');

exports.createAllUsers = async (req, res) => {
    const user = await userModel.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        created_at: req.body.created_at,
        updated_at: req.body.updated_at
    });

    console.log(user);

    return res.status(201).json({ message: 'User created' });
}

//Get All Users

exports.getAllUsers = async (req, res) => {
    const users = await userModel.find({});

    return res.json(users);
}

//Get uSER By Id


exports.getById = async (req, res) => {
    const user = await userModel.find(req.params.id);

    return res.json(user);
}

//Update a User

exports.update = async (req, res) => {
    const user = await userModel.findByIdAndUpdate(req.params.id, req.body);

    return res.json(user);
}

//Delete a User

exports.delete = async (req, res) => {
    const user = await userModel.findByIdAndDelete(req.params.id);

    return res.json(user);
}
