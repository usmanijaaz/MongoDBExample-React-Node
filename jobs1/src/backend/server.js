const express = require("express");
const database = require('./mongodb');
const app = express();

const PORT = 3001;
const data = require('./JobData.json');
console.log(data.Jobs[0].title);
console.log(data.Jobs[0].description);
console.log(data.Jobs[0].duration);
console.log(data.Jobs[0].money);
console.log(data.Jobs[0].bids);
console.log(data.Jobs[0].links);

const cors = require("cors");
app.use(cors());

app.listen(PORT, () => { 
    console.log("Successfully started server at: " + PORT);
    database.connectToMongoDb();
    //database.InsertJobItem(data.Jobs[0]);
    //database.InsertJobItem(data.Jobs[1]);
    //database.InsertJobItem(data.Jobs[2]);

});
  
app.get("/", (request, response) => {
    console.log("Inside get method");
    
    var res = database.fetchJobs();
    console.log(res);
    response.json(res);

  });
 