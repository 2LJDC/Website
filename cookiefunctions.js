//Speichert den Cookie mit Namen, Wert und Ablaufdatum in Tagen
function safe(n, v, e) { //name, value, expiration
    let date = new Date();
    date.setTime (date.getTime() + (e * 1000 * 60 * 60 * 24));
    const expires = "expires=" + date.toUTCString();
    document.cookie = n + "=" + v + "; " + expires + "; path=/";
  }

//Prüft ob ein Cookie mit übergebenem Namen existiert
function exists(n) {
    cName = new Array();
    cValue = new Array();

    const array = document.cookie.split(";");

    for (let i = 0; i < array.length; i++) {
        if(array[i].charAt(0) == " ") array[i] = array[i].substring(1);
        const current = array[i].split("=");
        cName.push(current[0]);
        cValue.push(current[1]);
    }

    return cName.includes(n);
}

//Liefert den value zum übergebenen Cookie
function getCookie (n){
    cName = new Array();
    cValue = new Array();

    const array = document.cookie.split(";");
    for (let i = 0; i < array.length; i++) {
        if(array[i].charAt(0) == " ") array[i] = array[i].substring(1);
        const current = array[i].split("=");
        cName.push(current[0]);
        cValue.push(current[1]);
    }
    return cValue[cName.indexOf(n)];
}
  
//Alle vorhandenen Cookies löschen
function deleteAll (){
    cName = new Array();
    cValue = new Array();

    const array = document.cookie.split(";");
    for (let i = 0; i < array.length; i++) {
        if(array[i].charAt(0) == " ") array[i] = array[i].substring(1);
        const current = array[i].split("=");
        safe(current[0], current[1], -1);
    }
}

//EInblenden und Ausblenden der Cookie Abfrage
function cookieMessage (){
    if(exists("erlaubt")){
        document.getElementById("cookieMessage").style.display = "none";
    }
    else{
        document.getElementById("cookieMessage").style.display = "block";
    }
}

//Funktionalität der Buttons der Cookie Abfrage
function cookieButton (b){
    document.getElementById("cookieMessage").style.display = "none";
    safe("erlaubt", b, 30);
}