var Episode = (function () {
  function Episode(name, info, date) {
    this.name = name;
    this.info = info;
    this.date = date;
    this.elements = createEpisode();
    this.setName(name);
    this.setInfo(info);
    this.setDate(date);
  }

  Episode.prototype.setName = function (name) {
    this.elements.name.innerText = this.name = name;
  };

  Episode.prototype.setInfo = function (info) {
    this.elements.info.innerText = this.info = info;
  };

    Episode.prototype.setProducer = function (producer) {
        this.elements.producer.innerText = this.producer = producer;
    };

  Episode.prototype.setDate = function (date) {
    this.elements.date.innerText = this.date = date;
  };

  Episode.prototype.render = function (parent) {
    parent.appendChild(this.elements.el);
  };

  return Episode;
})();


