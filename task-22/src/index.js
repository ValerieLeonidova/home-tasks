require('./style.scss');

const Episode = require("./models/episode");

const axios = require('axios').default;

axios.get('https://ghibliapi.herokuapp.com/films/')
    .then(function (responce) {
        return responce.data;
    })
    .then(
        function (data) {
            return data.map(function (episode) {
                var episodeItem = new Episode(episode.title, episode.description, episode.release_date);
                episodeItem.setProducer(episode.producer);
                return episodeItem;
            });
        })
    .then(
        function (arrOfEpisods) {
            arrOfEpisods.forEach(function (episode) {
                episode.render(wrapper);
            });
        })
    .catch(function (err) {
        console.log(err);
    });
