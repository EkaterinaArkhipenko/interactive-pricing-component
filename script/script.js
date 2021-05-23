
let price =['8','12', '16' ,'24' ,'36'];
let viewers=['10','50','100','500','1',];

var followers =document.getElementById("viewer");
var discount = document.getElementById("discount__toggler");
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var ammount=document.getElementById("million");
var period=document.getElementById("monthly");

window.addEventListener('DOMContentLoaded',function() {
    followers.innerHTML="10";
    output.innerHTML = "8";
    ammount.innerHTML='K';
    period.innerHTML='/monthly'
})

 function CheckDiscount(){
   output.innerHTML = price[slider.value];
   if (output.classList=='discounted')
   {output.innerHTML = output.innerHTML*0.75;
   period.innerHTML='/year';}
   else {
     output.innerHTML = output.innerHTML;
     period.innerHTML='/monthly';
   };};

discount.addEventListener('click', function Discount(){
  output.classList.toggle('discounted');
  CheckDiscount();
});

slider.oninput = function Count(){
CheckDiscount();
  followers.innerHTML=viewers[slider.value];
  Followers();
};

function Followers(){
if (followers.innerHTML=='1'){
ammount.innerHTML='M';
} else {
  ammount.innerHTML='K';
}};

slider.addEventListener("click", function progressValue(){
  var x=slider.value;
  var color='linear-gradient(90deg, hsl(174, 86%, 45%)'+ x*25 +'%, hsl(224, 65%, 95%)'+ x*25 +'%)';
  slider.style.background = color;
});
