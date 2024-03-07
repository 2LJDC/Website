//Cookies
let erlaubt, cName, cValue;
cName = new Array();
cValue = new Array();

if (document.cookie == "") {
    if (confirm("Erlauben Sie den Zugriff auf Cookies?")) {
      //Cookies werden neu erstellt
      erlaubt = true;
    }
  }
  //Cookies bereits vorhanden
  else {
    erlaubt = true;
    const array = document.cookie.split(";");

    for (let i = 0; i < array.length; i++) {
        if(array[i].charAt(0) == " ") array[i] = array[i].substring(1);
        const current = array[i].split("=");
        cName.push(current[0]);
        cValue.push(current[1]);
    }
  }
  
if (erlaubt) {
    for (let i = 0; i < cName.length; i++) {
        if(cValue[i] == "true"){
            document.getElementById(cName[i]).checked = true;
        }
        else if(cValue[i] == "false"){
            document.getElementById(cName[i]).checked = false;
        }
        else{
            document.getElementById(cName[i]).value = cValue[i];
        }
    }
    if (document.getElementById("eigeneFarbe").checked) {
        document.getElementById("farbe").disabled = !document.getElementById("farbe").disabled;
    }
}