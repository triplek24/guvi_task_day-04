//Use the same rest countries and print all countries name, region, sub region and population


var request = new XMLHttpRequest();
request.open('GET',"https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload = function(){
 var  data = JSON.parse(request.response);
 //convert the string of object(JSON) 
 for(var i=0;i<data.length;i++){
console.log(data[i].name);
//print the name of the country
console.log(data[i].region);
//print the country region
console.log(data[i].subregion);
//print the country subregion
console.log(data[i].population);
//print the each  of the country population
 }
}