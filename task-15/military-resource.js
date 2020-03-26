function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
var healthMax = 50;
var distanceMax = 50;

function MilitaryResource(type, health, distance) {
    this.type = type;
    this.health = health;
    this.distance = distance;
}

var type = {
    archer: "Archer",
    infantry: "Infantry",
    cavalry: "Cavalry"
};

MilitaryResource.prototype.isReadyToMove = function () {
    return this.distance >= healthMax;
};

MilitaryResource.prototype.isReadyToFight = function () {
    return this.health >= distanceMax;
};

MilitaryResource.prototype.restore = function () {
    return (!(this.isReadyToMove()) || !(this.isReadyToFight()));
};

function Squad() {
    this.squad = [];
}

var restore = [];
var buttle = [];

Squad.prototype.everyIsReadyToMove = function () {
    return this.squad.every(function (solder) {
        return solder.isReadyToMove();
    });
};

Squad.prototype.everyIsReadyToFight = function () {
    return this.squad.every(function (solder) {
        return solder.isReadyToFight();
    });
};

Squad.prototype.restore = function (solder) {
    if (solder.restore()) {
        restore.push(solder);
    }
};

Squad.prototype.getReadyToBattle = function (solder) {
    if (solder.isReadyToFight() && solder.isReadyToMove()) {
        buttle.push(solder);
    }
};

Squad.prototype.combineResources = function (solder) {
    this.squad.push(solder);
    squad.restore(solder);
    squad.getReadyToBattle(solder);
};


var solder1 = new MilitaryResource(type.archer, random(1, 100), random(1, 100));
var solder2 = new MilitaryResource(type.archer, random(1, 100), random(1, 100));
var solder3 = new MilitaryResource(type.infantry, random(1, 100), random(1, 100));
var solder4 = new MilitaryResource(type.infantry, random(1, 100), random(1, 100));
var solder5 = new MilitaryResource(type.cavalry, random(1, 100), random(1, 100));
var solder6 = new MilitaryResource(type.cavalry, random(1, 100), random(1, 100));
var squad = new Squad();

squad.combineResources(solder1);
squad.combineResources(solder2);
squad.combineResources(solder3);
squad.combineResources(solder4);
squad.combineResources(solder5);
squad.combineResources(solder6);

// console.log(squad);
//
// console.log('Everyone in Squad is ready to Moove: ' + squad.everyIsReadyToMove());
// console.log('Everyone in Squad is ready to Fight: ' + squad.everyIsReadyToFight());
// console.log('Solders going to restore: ' + restore.length);
// console.log(restore);
// console.log('Solders Ready for Battle: ' + buttle.length);
// console.log(buttle);

