var selectList = document.getElementById('json-select');
var request = new XMLHttpRequest();

request.onreadystatechange = function (response) {
  if (request.readyState === 4 ) {
    if (request.status === 200) {
      var jsonOptions = JSON.parse(request.responseText);
      for (var key in jsonOptions) {
        var option = document.createElement('option');
        option.value = key;
        option.innerHTML = key;
        selectList.appendChild(option); };
    }
  }
};
request.overrideMimeType("application/json");
request.open('GET', chrome.extension.getURL('combo.json'), false);
request.send(null);

function drug() {
  document.getElementById("drugInfo").innerHTML= "dicks";
};