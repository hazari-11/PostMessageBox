const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/postManagerDB", (err) => {
  if (!err) console.log("Mongodb connection succeded.");
  else
    console.log(
      "Error while connecting mongoDB : " + JSON.stringify(err, undefined, 2)
    );
});
