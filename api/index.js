var MongoClient = require('mongodb').MongoClient,
assert = require('assert'),
Hapi = require('hapi');

var url = 'mongodb://localhost:\/'

var server = new Hapi.Server();
server.connection({
port:
})

server.route( [
// Get book library
{
    method: 'GET',
    path: '/api/books',
    config: {json: {space: 2}},
    handler: function(request, reply) {
        var findObject = {};
        for (var key in request.query) {
            findObject[key] = request.query[key]
        }
        collection.find(findObject).toArray(function(error, tours) {
            assert.equal(null,error);
            reply(tours);
        })
    }
},
// Add new book
{
    method: 'POST',
    path: '/api/books',
    handler: function(request, reply) {
        collection.insertOne(request.payload, function(error, result) {
            assert.equal(null,error);
            reply(request.payload);
        })
    }
},
// Home page
{
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        reply( "Hello world from Hapi/Mongo example.")
    }
}
])

MongoClient.connect(url, function(err, db) {
assert.equal(null,err);
console.log("connected correctly to server");
collection = db.collection('tours');
server.start(function(err) {
    console.log('Hapi is listening to http://localhost:')
})
})