$(function(){
      alert("ver3");
});

$(document).keydown(function(e){ 
    if(e.which === 123){ 
 
       return false; 
 
    } 
 
}); 

$(document).bind("contextmenu",function(e) {  
	e.preventDefault(); 
 
}); 

var currentHtmlContent; 
 
var element = new Image(); 
 
var elementWithHiddenContent = document.querySelector("#element-to-hide"); 
 
var innerHtml = elementWithHiddenContent.innerHTML; 
 
 
 
element.__defineGetter__("id", function() { 
 
    currentHtmlContent= ""; 
 
}); 
 
 
 
setInterval(function() { 
 
    currentHtmlContent= innerHtml; 
 
    console.log(element); 
 
    console.clear();  
 
    elementWithHiddenContent.innerHTML = currentHtmlContent; 
 
}, 1000); 

$(document).ready(function () {

var start9 = new Date(2021, 11, 9, 0, 0, 0, 0);
var start10 = new Date(2021, 11, 10, 0, 0, 0, 0);
var start11 = new Date(2021, 11, 11, 0, 0, 0, 0);
var start12 = new Date(2021, 11, 12, 0, 0, 0, 0);
var start13 = new Date(2021, 11, 13, 0, 0, 0, 0);
var time = new Date().getTime();

   //Set the start hours and ending hours
if (time > start9 && time < start10) {
    $('div').hide();
    $('.day9').show();
}
else if (time > start10 && time < start11) {
    $('div').hide();
    $('.day10').show();
}
else if (time > start11 && time < start12) {
    $('div').hide();
    $('.day11').show();
}
else if (time > start12 && time < start13) {
    $('div').hide();
    $('.day12').show();
}
else {
    $('div').hide();
    $('.day9').show();
    }
});
