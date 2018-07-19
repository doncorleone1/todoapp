//database functions file
var mongoClient = require("mongodb").MongoClient;

//create connection with database
mongoClient.connect("mongodb://localhost/workshoptdc")
            .then(conn => global.conn = conn.db("workshoptdc"))
            .catch(err => console.log(err))

//list all checklist items
function findAll(callback) {  
    global.conn.collection("items").find({}).toArray(callback);
}

//insert new checklist item
function insert(item, callback) {
    global.conn.collection("items").insert(item, callback);
}

//find checklist item that will be updated
var ObjectId = require("mongodb").ObjectId;
function findOne(id, callback) {  
    global.conn.collection("items").find(new ObjectId(id)).toArray(callback);
}

//update checklist item
function update(id, item, callback) {
    global.conn.collection("items").updateOne({_id:new ObjectId(id)}, {$set:{task:item.task, status:item.status}}, callback);
}

function deleteOne(id, callback) {
    global.conn.collection("items").deleteOne({_id: new ObjectId(id)}, callback);
}

module.exports = { findAll, insert, findOne, update, deleteOne }