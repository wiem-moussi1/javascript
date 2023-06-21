
let heading = document.getElementById("myHeading");

heading.textContent = "Nouveau titre";

let button = document.getElementById("myButton");

button.addEventListener("click", function() {
  heading.style.color = "red";
  console.log("clicked")
});
button.addEventListener('mouseover',function(){
    button.style.backgroundColor="green";
});

let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  const nom = document.getElementById("name");
  const mail = document.getElementById("email");

  if (nom.value === "") {
    alert("Veuillez saisir votre nom.");
    
  }


  if (mail.value === "") {
    alert("Veuillez saisir votre email.");
    
  }

  alert("Formulaire soumis avec succès !");
});
