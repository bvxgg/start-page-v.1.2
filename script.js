//Fait en sorte que l'élément DIV soit déplacable
dragElement(document.getElementById(("wrap")));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* Déplace le DIV seulement en cliquant sur le header */
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* Sinon permet de le déplacer autre part */
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    // Place le curseur au bon endroit
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // Fait appel à une fonction quand le curseur bouge
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    // Calcul la position du curseur
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // Déplace le DIV à la position du curseur
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* Arrête le mouvement quand le curseur s'arrête */
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function buttonClickGET() {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=Strasbourg,fr&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric"

    $.get(url, callBackGetSuccess).done(function() {
        //alert( "second success" );
      })
      .fail(function() {
        alert( "error" );
      })
      .always(function() {
        //alert( "finished" );
      });
}
var callBackGetSuccess = function(data) {
    var element = document.getElementById("zone_meteo");
    element.innerHTML = "La temperature est de " + data.main.temp;
}
