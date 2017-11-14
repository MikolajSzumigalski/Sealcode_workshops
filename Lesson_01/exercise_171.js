function pole(rad, r, PI=3.14){
    return rad/360 * 2 PI * r;
}

console.log(pole(60, 5, 3.14));
console.log(pole(30, 7, 22/7));
console.log(pole(45, 2));