var express = require('express');
var app = express();

var favorites = [
    {
        id: 1,
        name: "name-1"
    },
    {
        id: 2,
        name: "name-2"
    },
    {
        id: 3,
        name: "name-3"
    },
    {
        id: 4,
        name: "name-4"
    }
];

app.use(express.json());

app.get('/', function (req, res) {
    res.send('App works');
});

app.get('/favorites', function (req, res) {
    res.json(favorites);
});

app.post('/favorites', function (req, res) {
    favorites.push(req.body);
    res.json(req.body);
});

app.delete('/favorites/:id', function (req, res) {
    var index = favorites.findIndex(function (value) {
        return value.id === req.body.id;
    });
    favorites.splice(index, 1);
    if (index === -1) return favorites;
    res.json(req.body);
});

app.listen(3000, function () {
console.log('listening port: 3000');
});