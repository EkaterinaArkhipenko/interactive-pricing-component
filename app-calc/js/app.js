



const themeTogle1 = document.getElementById('toggle3radio1');
const reset=document.getElementById('reset');
const equall=document.getElementById('equall');
const del=document.getElementById('delete');
const input=document.getElementById('calc__input');
const decimal = document.getElementById('decimal');
const operatorButton = document.querySelectorAll('.operator');
const number= document.querySelectorAll('.number');
const element = document.body;
const togglerDark = document.getElementById('toggle3radio1');
const togglerLight = document.getElementById('toggle3radio2');
const togglerPurple = document.getElementById('toggle3radio3');

const body = document.getElementById('body');



// Variables//
var variables = ['', ''];
var operator='';
var id=0;

// Events//

del.addEventListener('click', Delete);

var myDiv = document.getElementById('calc__input')
function CheckInputLength(){
  if(myDiv.innerText.length>20){
    return input.innerText=input.innerText.substr(0,20);
  }
}

// myDiv.text(myDiv.text().substring(0,5));


reset.addEventListener('click', Reset)
function Reset(){
  var variables = ['', ''];
  var operator='';
  var id=0;
  input.innerText=0;
  res = [];

}

decimal.addEventListener('click', function(){
  if (input.innerText.indexOf('.') !== -1){
      console.log('error');
  } else {
    input.innerText=input.innerText + this.value;
      res.push(this.innerText)
}
});

// Functions//

function Delete(){
  if(input.innerText.length>0)
  {

   input.innerText= input.innerText.substr(0, input.innerText.length - 1);

  } else {
input.innerText ='0';
}
};


function updateScreen(){
if(variables[id]===''){
  input.innerText ='0';
} else {
  input.innerText=variables[id];
}}




var res = [];


function Calc(){
  const x = res.join('');
  const string = eval('x');
  const strings=string.replace(/[^-()\d/*+.,]/g, '');
  slisedString=strings.slice(0,-1);
  result=eval(slisedString);
  operator='';
  variables[1]='';
  variables[0]= result;
  id=0;
  updateScreen();
  variables[0]='';
  res = [];
  res.push(result)
}

// Buttons//

for (var i=0; i<number.length; i++) {
  number[i].addEventListener('click', function(){

    if (input.innerText!=="0"){
      CheckInputLength();
      input.innerText=input.innerText + this.value;
      res.push(this.innerText);


    }  else{
        input.innerText=this.value;
        res.push(this.innerText)

    }
variables[id] = input.innerText;
})
};


// Operation buttons//

operatorButton.forEach(operatorButton =>{
operatorButton.addEventListener('click', ()=>{
  if(variables[0] === '' && input.innerText !== '0'){
     variables[0] = input.innerText;
        }
id++;
input.innerText=0;

switch(operatorButton.value){

      case '+':
      case '-':
      case '/':

      operator=operatorButton.value;
      break;
      case '*':
                     operator = '*';
    operator=operatorButton.value;
    break;
    }

res.push(operator);

console.log(res);
    console.log('variables: ', variables, 'id: ', id , 'operator: ' , operator);
})
});

equall.addEventListener('click', Calc);


// Theme toggle


togglerDark.addEventListener('click', function Function() {

  // input.classList.toggle("dark-theme");
  body.classList.toggle("dark-theme");
  body.classList.remove("light-theme","purple-theme" );
});

togglerLight.addEventListener('click', function Function() {

  // input.classList.toggle("light-theme");
  body.classList.toggle("light-theme");
    body.classList.remove("dark-theme","purple-theme" );
});

togglerPurple.addEventListener('click', function Function() {

  // input.classList.toggle("purple-theme");
  body.classList.toggle("purple-theme");
  body.classList.remove("dark-theme","light-theme"  );

});
