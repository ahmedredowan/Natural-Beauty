AOS.init();

/*---------toggler icon----------*/
var navi_link = document.getElementById("navi-link");
var menuid = document.getElementById("menuId");
var crossid = document.getElementById("crossId");

function menuFun() {
    menuid.style.display="none";
    crossid.style.display="block";  
    navi_link.style.display="block";
    
    crossid.style.top="-200px";
    crossid.style.right="0px";
    crossid.style.position="absolute";

 
}
function crossFun() {
    menuid.style.display="block";
    crossid.style.display="none"; 
    navi_link.style.display="none";

 
}