function main() {
    let x = 5;
    x--;
    x = fun(x);
    let y = 0;
    for (let i = 0; i < x; i++) {
        console.log(i);
        y++;
    };
    console.log(y);
}

function fun(x) {
    return x--;
}

window.onload = main;
