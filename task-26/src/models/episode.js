import createEpisode from '../lib/dom';

export default class Episode {
    constructor(name, info, date) {
        this.name = name;
        this.info = info;
        this.date = date;
        this.elements = createEpisode();
        this.setName(name);
        this.setInfo(info);
        this.setDate(date);
    }

    setName(name){
        this.elements.name.innerText = this.name = name;
    }

    setInfo(info) {
        this.elements.info.innerText = this.info = info;
    }

    setProducer(producer) {
        this.elements.producer.innerText = this.producer = producer;
    }

    setDate(date) {
        this.elements.date.innerText = this.date = date;
    }

    render(parent) {
        parent.appendChild(this.elements.el);
    }
}


