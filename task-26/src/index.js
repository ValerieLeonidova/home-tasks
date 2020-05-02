import './style.scss';

import Episode from './models/episode';

import axios from 'axios';

axios.get('https://ghibliapi.herokuapp.com/films/')
    .then(response => response.data)
    .then(
        data => {
            return data.map(episode => {
                const episodeItem = new Episode(episode.title, episode.description, episode.release_date);
                episodeItem.setProducer(episode.producer);
                return episodeItem;
            });
        })
    .then(arrOfEpisods => {
        arrOfEpisods.forEach(episode => episode.render(wrapper));
    })
    .catch(err => console.error(err));
