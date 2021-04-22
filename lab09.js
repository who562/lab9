$(document).ready(function(){

$( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).click( function( event ) {
      event.preventDefault();
    } );
  } );

  document.getElementById("myBtn").addEventListener("click", function() {
    var btn = document.createTextNode("NO Data Yet!");
    document.body.appendChild(btn);
    alert ("NO Data Yet");
  });

 

});