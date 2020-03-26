var infantryImg = 'img/infantry.jpg';
var archerImg = 'img/archer.jpg';
var cavalryImg = 'img/cavalry.jpg';

var holder = document.getElementById('holder');

function createBox() {
    var box = document.createElement("div");
    box.className = 'box';
    holder.appendChild(box);

    var lineHealth = document.createElement("div");
    lineHealth.innerHTML = 'Health: ' + this.health;
    lineHealth.className = 'health';
    lineHealth.style.textAlign = 'center';
    lineHealth.style.backgroundColor = '#fbd5d5';
    box.appendChild(lineHealth);

    var lineStamina = document.createElement("div");
    lineStamina.innerHTML = 'Stamina: ' + this.distance;
    lineStamina.className = 'stamina';
    lineStamina.style.textAlign = 'center';
    lineStamina.style.backgroundColor = '#fbe3b7';
    box.appendChild(lineStamina);

    var lineType = document.createElement("div");
    lineType.innerHTML = 'Type: <strong>' + this.type + '</strong>';
    lineType.className = 'type';
    lineType.style.textAlign = 'center';
    box.appendChild(lineType);

    var image = document.createElement("img");
    image.className = 'image';
    image.style.border = '5px solid #88d2dc';
    box.appendChild(image);
    if (this.type === type.archer) {
        image.src = archerImg;
    } else if (this.type === type.infantry) {
        image.src = infantryImg;
    } else if (this.type === type.cavalry) {
        image.src = cavalryImg;
    }


    var readyBattle = document.createElement("div");
    readyBattle.className = 'ready';
    readyBattle.style.position = 'absolute';
    box.appendChild(readyBattle);

    var readyMove = this.isReadyToMove();
    var readyFight = this.isReadyToFight();
    if (readyMove && readyFight) {
        readyBattle.classList.add('yes');
    } else {
        readyBattle.classList.add('no');
    }
}


createBox.call(solder1);
createBox.call(solder2);
createBox.call(solder3);
createBox.call(solder4);
createBox.call(solder5);
createBox.call(solder6);


var total = document.createElement("div");
total.innerHTML = 'Solders ready to Fight: <strong>' + buttle.length + '</strong>. Solders need to Restore: <strong>' + restore.length + '</strong>.';
total.className = 'total';
total.style.textAlign = 'center';
total.style.width = '100%';
total.style.fontSize = '18px';
holder.appendChild(total);