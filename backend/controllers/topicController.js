const mongoose = require ("mongoose");
const { TopicSchema } = require("../models/topicModel.js");
const Topic = mongoose.model("Topic", TopicSchema);

class TopicsController {
    static async getTopics(req, res){
        try{
            const TopicsList = await Topic.find({});
            console.log("Returned from database: "+TopicsList)
            res.json(TopicsList)
        }
        catch(e){
            console.error(`api, ${e}`)
        }
    }
    static async getTopicsById(req, res){
        /* Expecting a parameter of 'id' to be sent in the url. Grab it. */
        try{ 
            let topic_id = req.params.id || {} /* If none was entered leave id empty */
            const ThisTopic = await Topic.findById(topic_id)
            /* If that id did not return an object, return 404 error */
            if(!ThisTopic){
                res.status(404).json({error:"not found"})
                return
            }
            console.log(ThisTopic)
            res.json(ThisTopic)
        }
        /* If alternate error occurs */
        catch(e){
            console.log(`api, ${e}`)
            res.status(500).json({error:e})
        }
    }
    static async postTopic (req, res) {
        try{
            /* Instantiate new topic as an object of class Topic */
            let newTopic = new Topic(req.body);
            /* Post to mongodb */
            newTopic.save((err, Topic) => {
                if (err) {
                  res.send(err);
                }
                res.json(Topic);
            });
        }

        /* Any other error  */
        catch(e){
            console.log(`api, ${e}`)
            res.status(500).json({error:e})
        }
    }
    static async updateTopic (req, res){
        try{
            /* update in mongodb  */

            Topic.findOneAndUpdate(
                /* Take id from body of request */
                { _id: req.body._id },
                req.body,
                { new: true },
                (err, Topic) => {
                if (err) {
                    res.send(err);
                }
                res.json(Topic);
                }
            )

        /* if any other error catch here */
        }
        catch(e){
            res.status(500).json({error:e})
            console.log(`api, ${e}`)
        }
    }

    /* Delete Topic Method */
    static async deleteTopic (req, res){
        try{
            Topic.remove({_id: req.query.id}, (err, Topic) => {
                if(err){
                    res.send(err)
                }
                res.json({message: "Successfully deleted review"})
            })

        }
        /* Any other error catch here */
        catch(e){
            console.log(`api, ${e}`)
            res.status(500).json({error:e})
        }
    }
}
exports.TopicsController = TopicsController