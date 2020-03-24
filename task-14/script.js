var sex = {
    male: "male",
    female: "female"
};

var racoons = [new Racoon(sex.female), new Racoon(sex.male), new Racoon()];


racoons[0].run();
racoons[1].jump();
racoons[0].giveMilk();
racoons[1].giveMilk();
racoons[2].giveMilk();

console.log(racoons);