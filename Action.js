var GetWeatherAnchor = document.getElementById("GetWeatherAnchor");
var SearchTextField = document.getElementById("SearchBar");
var ButtonSearch = document.getElementById("ButtonSearch");

let Tbody = document.getElementsByTagName("tbody");

let dataMap = new Map();
ButtonSearch.addEventListener("click", (ev) => {

  if (typeof SearchTextField.value === "string" && SearchTextField.value.length === 0) {
    Tbody[0].replaceChildren();
    LoadingData();
  } else if (SearchTextField.value === null) {
    console.log("The string is null");
  } else {
    Tbody[0].replaceChildren();
    ReadmapData(dataMap,SearchTextField.value)
  }
 

});


GetWeatherAnchor.addEventListener("click",(ev)=>{
  Tbody[0].replaceChildren();
  ShowData(dataMap);
   



});



function LoadingData(searchtext) {

  fetch("http://forecast666.somee.com/WeatherForecast")
    .then(
      (res) => res.json())
    .then((data) => {
      data.forEach((item, index) => {
        dataMap.set(index, item);
    
      });
       
   

    
      dataMap.forEach((item, index) => {
     
        var elementtr = document.createElement("tr");
        Tbody[0].appendChild(elementtr);
    
        Object.keys(item).forEach(function (key) {
          var elementtd = document.createElement("td");
          elementtd.innerHTML = `${item[key]}`
          elementtr.appendChild(elementtd)
    
        });
        
      });




     
    
    

   
     
    });
   

    

    

}


function ReadmapData(dataMap,text){
 
  dataMap.forEach((element, i) => {
    if(element["summary"].startsWith(text)){
    var elementtr = document.createElement("tr");
    Tbody[0].appendChild(elementtr);

    Object.keys(element).forEach(function (key) {
      var elementtd = document.createElement("td");
      elementtd.innerHTML = `${element[key]}`
      elementtr.appendChild(elementtd)

    });
  }

  });
console.log(dataMap)

}


function ShowData(dataMap){


  dataMap.forEach((element, i) => {
    
    var elementtr = document.createElement("tr");
    Tbody[0].appendChild(elementtr);

    Object.keys(element).forEach(function (key) {
      var elementtd = document.createElement("td");
      elementtd.innerHTML = `${element[key]}`
      elementtr.appendChild(elementtd)

    });
  

  });

}