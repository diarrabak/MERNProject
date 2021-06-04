import mongoose from 'mongoose';
import { SeminarSchema } from '../models/seminarModel.js';

const Seminar = mongoose.model('Seminar', SeminarSchema);

//Controllers functions used to realize CRUD functionalities
//These controllers called in the seminar routes to act on the database

//Add the seminar to the database
export const addSeminar = (req, res) => {
    let newSeminar = new Seminar(req.body);

    newSeminar.save((err, Seminar) => {
        if (err) {
            res.send(err);
        }
        res.json(Seminar);
    });
};

//Get all the seminars
export const getSeminars = (req, res) => {
    Seminar.find({},(err, Seminar) => {
        if (err) {
            res.send(err);
        }
        res.json(Seminar);
    });
};

//Get a particular seminar
export const getSeminarById = (req, res) => {
    Seminar.findById(req.params.SeminarId,(err, Seminar) => {
        if (err) {
            res.send(err);
        }
        res.json(Seminar);
    });
};

//Update a particular seminar
export const updateSeminar = (req, res) => {
    Seminar.findOneAndUpdate({ _id: req.params.SeminarId}, req.body, {new: true}, (err, Seminar) => {
        if (err) {
            res.send(err);
        }
        res.json(Seminar);
    });
};

//Remove a particular seminar
export const removeSeminar = (req, res) => {
    Seminar.remove({ _id: req.params.SeminarId},(err, Seminar) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted seminar'});
    });
};
