 var i=1;
function addCircle(){ 
        document.getElementById("circles").innerHTML+='<div class="circle" id='+i+' onclick=clickAlert('+i+')><center>'+i+'</center></div>';
        i++;
     } 
function clickAlert(a){
         alert('You clicked Circle : '+a);
     } 
