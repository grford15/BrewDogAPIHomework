var app = function(){
  const url = "https://api.punkapi.com/v2/beers";
  makeRequest(url, requestComplete);
}

const makeRequest = function(url, callBack){
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callBack);
  request.send();
}

const requestComplete = function(){
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  beers = JSON.parse(jsonString);
  populateList(beers);
}

const populateList = function(beers){
  const ul = document.getElementById('beers-list');
  const img = document.createElement('img');
  beers.forEach(function(beer, index) {
    let li = document.createElement('li')
    let url = beer.image_url;
    img.src = url;
    console.log(img);
    li.innerText = beer.name;
    li.value = index
    ul.appendChild(li)
  });
}

window.addEventListener('load', app);
