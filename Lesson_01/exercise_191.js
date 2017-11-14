var s = 'Podstawą szczęścia jest wolność, a podstawą wolności odwaga.';

var text = `Operuję na zdaniu: "Podstawą szczęścia jest wolność, a podstawą wolności odwaga."\n\n Trzynastym znakiem w tym zdaniu jest: ${s.substr(12,1)}. \nZnaki pomiędzy 7. a 12. pozycją to: ${s.substring(7, 12)}. \nPierwszy raz znak 'ą' pojawia się na miejscu: ${s.indexOf('ą')}. \nTen ciąg ma ${s.length} znaków.\n Po zamianie 'podstawą' na 'fundamentem' mamy: ${s.replace('podstawą', 'fundamentem')}.\n Część zdania przed przecinkiem to: ${s.split(',')[0]}\n Druga część zdania po odwróceniu to: ${s.split(',')[1].split('').reverse().join('')} .`

console.log(text);
