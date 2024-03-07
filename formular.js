
function senden() {

    let anrede;
    let vorlage;
    let farbe;

    if (document.getElementById("herr").checked == true) {
        anrede = "Herr";
    }else{
        anrede = "Frau";
    }

    if (document.getElementById("v1").checked == true){
        vorlage = 1;
    }else if(document.getElementById("v2").checked == true){
        vorlage = 2;
    }else if(document.getElementById("v3").checked == true){
        vorlage = 3;
    }

    if (document.getElementById("eigeneFarbe").checked == false){
        farbe = "standard";
    }else{
        farbe = document.getElementById("farbe").value;
    }

    const name = document.getElementById("name").value;
    const geburtsdatum = document.getElementById("birthdate").value;
    const mail = document.getElementById("email").value;
    const tel = document.getElementById("tel").value;
    const eigeneVorstellungen = document.getElementById("idee").value;
    const sonstiges = document.getElementById("sonstiges").value;

    const kunde = new Kunde (anrede, name, geburtsdatum, mail, tel, vorlage, farbe, eigeneVorstellungen, sonstiges);
    alert(kunde.toString());

    const http = new EasyHTTP();
    const output = JSON.stringify(kunde);

    const data = { 
      name: 'Hakuna Matata', 
      username: 'Simba', 
      email: 'simba@gmail.com'
    } 
  
    http.put('http://85.215.154.152:8080/submit', data) 
}

class Kunde{

    constructor (anrede, name, geburtsdatum, mail, tel, vorlage, farbe, eigeneVorstellungen, sonstiges){
        this.anrede = anrede;
        this.name = name;
        this.geburtsdatum = geburtsdatum;
        this.mail = mail;
        this.tel = tel;
        this.vorlage = vorlage;
        this.farbe = farbe;
        this.eigeneVorstellungen = eigeneVorstellungen;
        this.sonstiges = sonstiges;
    }

    toString(){
        return "Anrede: " + this.anrede + "\nName: " + this.name + "\nGeburtsdatum: " + this.geburtsdatum + "\nMail: " + this.mail + "\nTelefonnummer: " + this.tel + "\nVorlage: " + this.vorlage + "\nFarbe: " + this.farbe + "\nEigene Vorstellungen: " + this.eigeneVorstellungen + "\nSonstiges: " + this.sonstiges;
    }
}
