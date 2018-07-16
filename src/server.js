                    // THIS IS MONGODB STUFF AD
                    //7/15/18
db = connect('127.0.0.1:27017/mDB') 

    function insertData(myObject){
        db.names.insert(myObject)
    }

    function getDataBack() {
        var cursor = db.names.find();
        while(cursor.hasNext()){
            printjson(cursor.next());
        }
    }
                    //7/15/18
                    
// import { 
//     Stitch,
//     RemoteMongoClient,
//     AnonymousCredential
// } from "mongodb-stitch-browser-sdk";

// const client = Stitch.initializeDefaultAppClient('doors_to_minutes-ggkln');

// const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb1').db('<DATABASE>');

// client.auth.loginWithCredential(new AnonymousCredential()).then(user => 
//   db.collection('<COLLECTION>').updateOne({owner_id: client.auth.user.id}, {$set:{number:42}}, {upsert:true})
// ).then(() => 
//   db.collection('<COLLECTION>').find({owner_id: client.auth.user.id}, { limit: 100}).asArray()
// ).then(docs => {
//     console.log("Found docs", docs)
//     console.log("[MongoDB Stitch] Connected to Stitch")
// }).catch(err => {
//     console.error(err)
// });
                    // THIS IS MONGODB STUFF AD