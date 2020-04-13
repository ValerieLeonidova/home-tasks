var http = require('http');

var characters = [
    {
        id: 1,
        name: "Aria Stark"
    },
    {
        id: 2,
        name: "Daenerys Targaryen"
    },
    {
        id: 3,
        name: "Jon Snow"
    },
    {
        id: 4,
        name: "Cersei Lannister"
    },
    {
        id: 5,
        name: "Bran Stark"
    },
    {
        id: 6,
        name: "Tyrion Lannister"
    },
    {
        id: 7,
        name: "Tormund Giantsbane"
    }
];

var newArray = characters.map(function (user) {
    return user.name;
});


var server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end('Game of Thrones characters: ' + newArray);
});
server.listen(8080);