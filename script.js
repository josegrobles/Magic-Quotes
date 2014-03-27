var random = Math.random();
var multiply = random*10;
var floor = Math.floor(multiply);
if(floor==0){
var quote = new XMLHttpRequest();
quote.open("GET", "http://api.theysaidso.com/qod.xml", false);
quote.send();
xmlQuote = quote.responseXML; 
var Quote = xmlQuote.getElementsByTagName("quote")[0].childNodes[0].nodeValue;
document.write('<p style="width:320px;position:absolute;left:50%;margin-left:-160px;position:absolute;text-align:center;font-family:HelveticaNeue-Light;font-size:15px;color:black;top:270px;">' + Quote + '</p>');
}
else if(floor>=1 && floor<=10){
var quoteFallback = new XMLHttpRequest();
quoteFallback.open("GET", "http://www.iheartquotes.com/api/v1/random?format=json&max_lines=5", false);
quoteFallback.setRequestHeader( 'Content-Type', 'application/json' );
quoteFallback.send();
JSONquoteFallback = JSON.parse(quoteFallback.responseText); 
var objJSONFallback = eval(JSONquoteFallback);
    document.write('<p style="width:320px;position:absolute;left:50%;margin-left:-160px;position:absolute;text-align:center;font-family:HelveticaNeue-Light;font-size:15px;color:black;top:270px;">' + objJSONFallback.quote +  '</p>');}