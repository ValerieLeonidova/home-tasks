var Racoon = (function (__super) {

    function Racoon(sex) {
        __super.call(this, sex, ["Striped"]);
        this.skills = "Stealing";
    }

    Racoon.prototype = Object.create(__super.prototype);
    Racoon.prototype.constructor = Racoon;

    return Racoon;
})(Mammal);