const mongoose = require( "mongoose");
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
  topic_name: {
    type: String,
    required: true,
  },
  topic_desc: {
    type: String,
    required: true,
  }
});

exports.TopicSchema = TopicSchema;