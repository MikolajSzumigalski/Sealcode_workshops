function Osoba(imie, nazwisko, rokUrodzenia, plec){
    this.imie=imie;
    this.nazwisko = nazwisko;
    this.rokUrodzenia = rokUrodzenia;
    this.plec = plec;
    
    function podajWiek(){
        var d = new Date();
        return d.getFullYear() - this.rokUrodzenia;
    }
}

function Nauczyciel(imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy){
    Osoba.call(this, imie, nazwisko, rokUrodzenia, plec);
    this.nauczanyPrzedmiot = nauczanyPrzedmiot;
    this.rokRozpoczeciaPracy = rokRozpoczeciaPracy;
    
    function podajIloscLatPracy(){
        var d = new Date();
        return d.getFullYear() - this.rokRozpoczeciaPracy;
    }
    
}
Nauczyciel.prototype = Object.create(Osoba.prototype);
Nauczyciel.prototype.constructor = Nauczyciel;

function Wychowawca(imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy, przydzielonaKlasa){
    Nauczyciel.call(this, imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy);
    this.przydzielonaKlasa = przydzielonaKlasa;
    
    }

Wychowawca.prototype = Object.create(Nauczyciel.prototype);
Wychowawca.prototype.constructor = Wychowawca;    

var Janusz = new Wychowawca('Janusz', 'Świerzak', 1950, 'm', 'historia', 1975, 'xd');
console.log(Janusz.podajWiek());
console.log(Janusz.podajIloscLatPracy());