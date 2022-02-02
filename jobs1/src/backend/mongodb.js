const connection_String = "mongodb+srv://usman123:thisisusman@cluster0.18eo2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//mongodb+srv://usman123:<password>@cluster0.18eo2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const mongoose = require("mongoose");

var schema = mongoose.Schema;

var JobSchema = new schema({
    title: String,
    duration: String,
    description: String,
    money: String,
   bids: String,
   links: []
})

var JobDetail = mongoose.model("JobDetail",JobSchema);

const insertJob = (Job) => {

    var JobtoInsert = new JobDetail({title:Job.title,duration:Job.duration,description:Job.description,money:Job.money,bids:Job.bids,links:Job.links} );
    JobDetail.insertMany([JobtoInsert],(err)=>{
        if(err){
            console.log(err);
        } 
        else{
        console.log("JobInserted");
        }
    })
}



const connecttoMongo = () => {
    mongoose.connect(
        connection_String,
        { useNewUrlParser : true, useUnifiedTopology: true},
        (err) =>  {
            if(err){
                console.log(err);

            }
            else{
            console.log("connection established succesfully");
            }
        }
    )

};
let fetchJobs = async () => {
    console.log('func call');

    var results = await JobDetail.find();
    console.log(results[0]);
    return results;

}
connecttoMongo();

module.exports.connectToMongoDb = connecttoMongo;
module.exports.InsertJobItem = insertJob;
module.exports.fetchJobs = fetchJobs;