 const raj = new XMLHttpRequest();

 raj.open("GET","https://restcountries.com/v2/all ")
raj.send();
raj.responseType="json"

raj.onload = function displayResult(){

const countries=raj.response;


for(i=0; i<countries.length; i++) {



console.log(countries[i].flag)

}

}