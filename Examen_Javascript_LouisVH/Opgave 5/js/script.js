var dagArray = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];

var maandArray = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];

var nu = new Date();
var dagtekst = dagArray[nu.getDay()];
var dag = nu.getDate();
var maandtekst = maandArray[nu.getMonth()];
var jaar = nu.getFullYear();
var uur = nu.getHours();
var minuten = nu.getMinutes();

var datumweergave = dagtekst + " " + dag + " " + maandtekst + " " + jaar + ", " + uur + " uur " + minuten + " minuten";

document.write(datumweergave);