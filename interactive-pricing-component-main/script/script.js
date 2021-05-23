

let price =['8','12', '16' ,'24' ,'36'];
let viewers=['10','50','100','500','1',];

var followers =document.getElementById("viewer");
var discount = document.getElementById("discount__toggler");
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var ammount=document.getElementById("million");

output.innerHTML = slider.value;

window.addEventListener('DOMContentLoaded',function() {
    followers.innerHTML="10";
    output.innerHTML = "8";
    ammount.innerHTML='K'

})

slider.oninput = function Count(){
  output.innerHTML = price[slider.value];
  followers.innerHTML=viewers[slider.value];
  Change();
}

slider.addEventListener("click", function(){
  var x=slider.value;
  var color='linear-gradient(90deg, hsl(174, 86%, 45%)'+ x*25 +'%, hsl(224, 65%, 95%)'+ x*25 +'%)';
  slider.style.background = color;
})

discount.addEventListener('click', function(){
  output.innerHTML = output.innerHTML*0.75;
});
function Change(){
if (followers.innerHTML=='1'){
ammount.innerHTML='M';
} else {
  ammount.innerHTML='K';
}
};
