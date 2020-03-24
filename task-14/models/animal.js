var Animal = (function () {
    function Animal(sex) {
        this.sex = sex;
    }
    Animal.prototype.run = function () {
        console.log("Animal Running");
    };

    Animal.prototype.jump = function () {
        console.log("Animal Jumping");
    };

    return Animal;
})();