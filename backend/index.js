const mongoose = require("mongoose");
const cors = require('cors');
const express = require("express");
const bodyparser = require("body-parser");
const seminarroutes = require("./routes/seminarRoutes");
const reviewroutes = require('./routes/reviewRoutes');
const userroutes = require('./routes/userRoutes');
const roleroutes = require ('./routes/roleRoutes');
const topicroutes = require('./routes/topicRoutes');

const app = express();
const PORT = 5000;

// mongo connection
mongoose.Promise = global.Promise;

//mongoose.connect('mongodb://localhost/reactMastersDB', {

//Atlas database connection
mongoose.connect('mongodb+srv://wamidgette:wamidgette@cluster0.mw6fd.mongodb.net/webinars_database?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true},
	() => console.log(" Mongoose is connected")
);

// bodyparser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// CORS setup
app.use(cors());

app.use(seminarroutes);
app.use(reviewroutes);
app.use(userroutes);
app.use(roleroutes);
app.use(topicroutes);


app.get('/', (req, res) =>
    res.send(`Our seminar application is running on port ${PORT}`)
);

app.use("/", (req, res) => {
    console.log("404");
    res.send(`Our seminar application is running on port ${PORT}`);
})
app.listen(PORT, () =>
    console.log(`Our seminar server is running on port ${PORT}`)
);
