var username= prompt ("what's your name?");
document.write ('<h5>'+"Hello ",username+'</h5>')


console.log(username);

var love= prompt ("Do you love flowers?");
if (love=='yes'){document.write('<h6>'+"That's Great"+'</h6>');}


confirm (alert('Choose between Calenduld and Diascia'));

var favFlo= prompt ("What's your favourit flower?");

while (favFlo !== 'Calenduld' && favFlo !== 'Diascia'){favFlo = prompt ("Please only write Calenduld or Diascia");}



var NumberOfPictures = prompt ("How many picture do you want?");

var flower = '';
var result = '';


if (favFlo=='Calenduld'){flower = ('<img src="./cal.jpg"/> </br>');}
else if (favFlo=='Diascia') {flower = ('<img src="./dia.jpg"/> </br>');}

console.log(flower);

for (var i=0; i<NumberOfPictures; i++){result += flower;}

console.log(result);
document.write(result);




var backgroungcolor = prompt("what's your favourite backgroundcolor(red,blue,pink or green) ?");

if (backgroungcolor == 'red') {
    document.body.style.backgroundColor = "red";


} else if (backgroungcolor == 'blue') {
    document.body.style.backgroundColor = "blue";
} else if (backgroungcolor == 'pink') {
    document.body.style.backgroundColor = "pink";
}else if (backgroungcolor == 'green') {
    document.body.style.backgroundColor = "green"; }