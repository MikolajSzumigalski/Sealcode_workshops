let a = $('h1');
console.log(a);
console.log(a.html());
console.log(a.text());

a = $('aside h2');
console.log(a);
console.log(a.html());
console.log(a.text());

a = $('aside section:last-child p');
console.log(a);
console.log(a.html());
console.log(a.text());

a =$('form fieldset:last-child');
console.log(a);
console.log(a.html());
console.log(a.text());

a =$('ul li:nth-last-child(2n+1)');
console.log(a);
console.log(a.html());
console.log(a.text());

a =$('ul input:checked');
console.log(a);
console.log(a.html());
console.log(a.val());