var username= prompt ("what's your name?");
document.write ('<h5>'+"Hello ",username+'</h5>')




var love= prompt ("Do you love flowers?");
if (love=='yes'){document.write('<h6>'+"That's Great"+'</h6>');}




var favFlo= prompt ("What's your favourit flower?");

if (favFlo=='Calenduld'){document.write('<img src="./cal.jpg"/>');}
else if (favFlo=='Diascia') {document.write('<img src="./dia.jpg"/>');}
else {confirm (alert('Choose between Calenduld and Diascia'));}



var backgroungcolor = prompt("what's your favourite backgroundcolor(red,blue,pink or green) ?");

if (backgroungcolor == 'red') {
    document.body.style.backgroundColor = "red";


} else if (backgroungcolor == 'blue') {
    document.body.style.backgroundColor = "blue";
} else if (backgroungcolor == 'pink') {
    document.body.style.backgroundColor = "pink";
}else if (backgroungcolor == 'blue') {
        document.body.style.backgroundColor == "green"; }