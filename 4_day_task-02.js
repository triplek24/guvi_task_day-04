//Use the rest countries API url -> https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json and display all the country flags in console

var request = new XMLHttpRequest();
request.open('GET',"https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload = function(){
 var  data = JSON.parse(request.response);
 //convert the string of object(JSON) 
 for(let i=0;i<data.length;i++){
console.log(data[i].flag);
//print the flag details of each country
 }
}
//print the  response from the server 