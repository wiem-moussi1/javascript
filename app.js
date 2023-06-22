
let heading = document.querySelector("#myHeading");
heading.textContent = "Nouveau titre";
let button = document.querySelector("#myButton");

button.addEventListener("click", function() {
  heading.style.color = "red";
  console.log("clicked")
});

button.addEventListener('mouseover',function(){
    button.style.backgroundColor="green";
});


let ps=document.querySelectorAll("p");
  console.log(ps);
ps.forEach((element,i,arr) => { 
  switch (i){
    case 0: element.style.color="red";element.style.fontSize="60px";element.style.cursor="pointer";element.addEventListener('click',function(){element.innerHTML='AAAAA';});break;
    case 1:element.style.color="green";element.style.fontSize="50px";element.style.cursor="pointer";element.addEventListener('click',function(){element.innerHTML='AAAA';});break;
    case 2:element.style.color="blue";element.style.fontSize="40px";element.style.cursor="pointer";element.addEventListener('click',function(){element.innerHTML='AAA';});break;
    case 3:element.style.color="yellow";element.style.fontSize="30px";element.style.cursor="pointer";element.addEventListener('click',function(){element.innerHTML='AA';});break;
    case 4:element.style.color="orange";element.style.fontSize="20px";element.style.cursor="pointer";element.addEventListener('click',function(){element.innerHTML='A';});break;
    default: console.log("erreur !!");
  }
  

});


let form = document.querySelector("#myForm");
form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  const nom = document.querySelector("#name");
  const mail = document.querySelector("#email");
  if (nom.value === "") {
    alert("Veuillez saisir votre nom."); 
  }
  if (mail.value === "") {
    alert("Veuillez saisir votre email.");  
  }
  alert("Formulaire soumis avec succès !");
});

