//section Projekte:
var mixer = mixitup('.Projekte-gallery');

//email section Kontakt
function validate(){
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let frage = document.querySelector(".frage");
    let schickenbtn= document.querySelector(".schicken-btn");

    schickenbtn.addEventListener("click", (e) => {
        e.preventDefault();
        if(name.value == "" || email.value == ""|| frage.value == ""){
            emptyerror();
        } else{
            sendmail(name.value, email.value, frage.value);
            success();
            name.value = '';
            email.value = '';
            frage.value = '';
        }
    });
}

validate();

function sendmail(name, email, frage){
    emailjs.send("service_rb21eoi","template_wb9dfjh",{
        to_name: email,
        from_name: name,
        message: frage,
    });
}

function emptyerror(){
    swal({
        title: "Achtung!",
        text: "Felder dürfen nicht leer sein!",
        icon: "error",
      });
}

function success(){
    swal({
        title: "Verschicken!",
        text: "Dankeschön, ich versuche innerhalb von 24 Stunden zu antworten",
        icon: "success",
      });
}



/*----------icon nav
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector("-navigation");

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

*/