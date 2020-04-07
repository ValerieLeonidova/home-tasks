var wrapper = document.getElementById('wrapper');

get('https://ghibliapi.herokuapp.com/films/')
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
