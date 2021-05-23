document.getElementById('burger__toggler').addEventListener('click', function(){
  document.getElementById('burger__toggler').classList.toggle('active')
  document.getElementById('header__menu').classList.toggle('active');
});
function myFunction() {
  var x = document.getElementById("bookmark__button");
  if (x.innerHTML === "Bookmark") {
    x.innerHTML = "Bookmarked";
  } else {
    x.innerHTML = "Bookmark";
  }
}
document.getElementById('bookmark__button').addEventListener('click', function(){
   document.getElementById('bookmark__button').classList.toggle('clicked');
   myFunction();

});

document.getElementById('bamboo').addEventListener('click', function(){
   document.getElementById('bamboo_stand').classList.toggle('active');
    document.getElementById('input_bamboo').classList.toggle('active');
document.getElementById('black_edition_inner').classList.remove('active');
document.getElementById('input_blackedition').classList.remove('active');
});
document.getElementById('black_edition').addEventListener('click', function(){
   document.getElementById('input_blackedition').classList.toggle('active');
    document.getElementById('black_edition_inner').classList.toggle('active');
  document.getElementById('input_bamboo').classList.remove('active');
     document.getElementById('bamboo_stand').classList.remove('active');
});

document.getElementById('modal__close').addEventListener('click', function(){
   document.getElementById('modal').classList.toggle('hidden');
   document.getElementById('input_bamboo').classList.remove('active');
      document.getElementById('bamboo_stand').classList.remove('active');
      document.getElementById('black_edition_inner').classList.remove('active');
      document.getElementById('input_blackedition').classList.remove('active');

});


document.getElementById('button__mastercraft').addEventListener('click', function(){
  document.getElementById('modal').classList.toggle('hidden');
});

document.getElementById('select__bamboo').addEventListener('click', function(){
  document.getElementById('modal').classList.toggle('hidden');
  document.getElementById('bamboo_stand').classList.toggle('active');
   document.getElementById('input_bamboo').classList.toggle('active');

});
document.getElementById('continue__bamboo').addEventListener('click', function(){
  document.getElementById('modal').classList.toggle('hidden');
  document.getElementById('confirmation').classList.toggle('hidden');

});
document.getElementById('button__noreward').addEventListener('click', function(){
  document.getElementById('modal').classList.toggle('hidden');
  document.getElementById('confirmation').classList.toggle('hidden');

});

document.getElementById('black__submit').addEventListener('click', function(){
  document.getElementById('modal').classList.toggle('hidden');
  document.getElementById('black_edition_inner').classList.toggle('active');
   document.getElementById('input_blackedition').classList.toggle('active');

});

document.getElementById('submit__black').addEventListener('click', function(){
  document.getElementById('modal').classList.toggle('hidden');
  document.getElementById('confirmation').classList.toggle('hidden');

});

document.getElementById('button__confirm').addEventListener('click', function(){
  document.getElementById('confirmation').classList.toggle('hidden');
  document.getElementById('input_bamboo').classList.remove('active');
     document.getElementById('bamboo_stand').classList.remove('active');
     document.getElementById('black_edition_inner').classList.remove('active');
     document.getElementById('input_blackedition').classList.remove('active');
});
document.getElementById('radio__input').addEventListener('click', function(){
    document.getElementById('confirmation').classList.toggle('hidden');
});
document.getElementById('radio__bamboo').addEventListener('click', function(){
  document.getElementById('bamboo_stand').classList.toggle('active');
   document.getElementById('input_bamboo').classList.toggle('active');
   document.getElementById('black_edition_inner').classList.remove('active');
   document.getElementById('input_blackedition').classList.remove('active');
});
document.getElementById('radio__black').addEventListener('click', function(){
  document.getElementById('bamboo_stand').classList.remove('active');
   document.getElementById('input_bamboo').classList.remove('active');
   document.getElementById('black_edition_inner').classList.toggle('active');
   document.getElementById('input_blackedition').classList.toggle('active');
});
