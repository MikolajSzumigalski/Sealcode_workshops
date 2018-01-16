function main() {
    const x = "Hello world!";
        if(typeof(x) == 'string'){
            
        }
    try{
        const result = run(x);
    }
    catch(e){
        console.warn("x jest typu string!");
    }
    console.log(x.lowerCase());
}
window.onerror = function (msg, url, line) {
   console.warn("komunikat bledu : " + msg );
   console.warn("url : " + url );
   console.warn("numer linii : " + line );
}
window.onload = main;
