const express = require('express');
const router = express.Router();
var app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

const mongoose = require('mongoose');

let databaseConnection = "Waiting for Database response...";
router.get("/", function(req, res, next) {
    res.send(databaseConnection);
});

const uri = "mongodb+srv://admin:admin@cluster0.rrda1.mongodb.net/MindfulMentorsDB?retryWrites=true&w=majority";
mongoose.connect (uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String
});

var Model = mongoose.model("user", userSchema);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("MongoDB Connected...");
    databaseConnection = "Connected to Database";

    Model.find({}, function (err, result) {
        if (err) return console.error(err);
        console.log(result);
        databaseConnection = result;
    });
});

router.route("").post((req, res) => {
    var user = req.body
    console.log(user);

    var newUser = new userSchema({
        username: user.username,
        email: user.email,
        password: user.password
    })

  
    user.username = username;
    user.email = email;
    user.password = password;
    Model.save(newUser, (err) => {
      if (err) return res.json({ success: false, error: err });
      return res.json(newUser);
    });
  });

  router.get('', (req, res) => {
    console.log(user);
    const { username, password } = req.body
    Model.find({ username: username, password: password }, (err, user) => {
      if (err) return res.json({ success: false, error: err });
      return res.json(user);
    });
    }); 

module.exports = router;