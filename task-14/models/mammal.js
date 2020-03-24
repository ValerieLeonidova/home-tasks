var Mammal = (function (__super) {

    function Mammal(sex, defaultAppearance) {
        __super.call(this, sex);
        this.defaultAppearance = ["Haired"].concat(defaultAppearance);
    }

    Mammal.prototype = Object.create(__super.prototype);
    Mammal.prototype.constructor = Mammal;


    Mammal.prototype.giveMilk = function () {
        var value = this.sex;
        if (value === sex.female) {
            console.log('Can give milk');
        } else if (value === sex.male) {
            console.log('No milk');
        } else {
            console.log('Gender not determined');
        }

    };

    return Mammal;
})(Animal);