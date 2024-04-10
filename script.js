var elems = document.getElementsByClassName('one');
var toggle = document.getElementsByClassName('toggle');

for (var i = 0; i < elems.length; i++) {
    elems[i].addEventListener('click', function() {
        console.log("hellllll");
        for (var j = 0; j < toggle.length; j++) {
          if(toggle.style.display='none'){
            toggle[j].style.display = 'block';
          }
          else{
          toggle[j].style.display = 'none';
          }
        }
    });
}




