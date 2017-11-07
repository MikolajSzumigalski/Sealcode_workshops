function Figura(nazwa){
	this.nazwa = nazwa;
}

function Czworokat(nazwa, typczworokata, x, y){
Figura.call(this, nazwa);
 this.typczworokata = typczworokata;
 this.x = x;
 this.y = y;
}

function Prostokat(nazwa, typczworokata, x,y){
	Czworokat.call(this, nazwa, x, y);
}

Prostokat.prototype.podajpole = function(){
 return this.x * this.y;
}
Prostokat.prototype.podajobwod = function(){
 return (this.x + this.y)*2;
}

var p = new Prostokat('prostokat', 'prostokat', 5, 8);
console.log(p.podajpole());
console.log(p.podajobwod());