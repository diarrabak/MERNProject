import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const SeminarSchema = new Schema({
	
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
   
    date: {
        type: Date,
        default: Date.now
    },
    place: {
        type: String,
         required: true
    },
    users: [  //a seminar has many users (presenters+authors+visitors...)
		{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
        }
	],
    topics: [ ////a seminar has many topics
		{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topic"
        }
	]
});
