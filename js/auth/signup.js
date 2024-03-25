// Implémenter le JS dans ma page

const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-validation-inscription");
const formInscription = document.getElementById("formulaireInscription");

inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);

btnValidation.addEventListener("click", InscrireUtilisateur);

//fonctions permettant de valider le formulaire
function validateForm(){
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPrenom);
    const mailOk = validateMail(inputMail);
    const passwordOk = validatePassword(inputPassword);
    const passwordConfirmOk = validateConfirmationPassword(inputPassword, inputValidationPassword);

    if(nomOk && prenomOk && mailOk && passwordOk && passwordConfirmOk){
        btnValidation.disabled = false;
    }
    else{
        btnValidation.disabled = true;
    }
}

function validateConfirmationPassword(inputPwd, inputConfirmPwd){
    if(inputPwd.value == inputConfirmPwd.value){
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
    }
    else{
        inputConfirmPwd.classList.add("is-invalid");
        inputConfirmPwd.classList.remove("is-valid");
        return false;
    }
}

function validatePassword(input){
    //definir mon regex
    const passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){
        //ok
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        //PAS OK
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}


function validateMail(input){
    //definir mon regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        //ok
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        //PAS OK
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}


function validateRequired(input){
    if(input.value != ''){
        //OK
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        //PAS OK
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function InscrireUtilisateur(){
    let dataForm = new FormData(formInscription);

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    let raw = JSON.stringify({
      "firstName": dataForm.get("nom"),
      "lastName": dataForm.get("prenom"),
      "email": dataForm.get("email"),
      "password": dataForm.get("mdp"),
    });
    
    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    /*
    fetch("https://localhost:8000/api/registration", requestOptions)
    .then(response => response.text()) --le transforme en--> .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error(error));
    */

    fetch (apiUrl+"registration", requestOptions)
    .then(response => {
        if(response.ok){
            return response.json();
        }
        else{
            alert("Erreur lors de l'inscription");
        }
    })
    .then(result => {
        alert("Bravo "+dataForm.get("prenom")+", vous êtes maintenant inscrit, vous pouvez vous connecter !");
        document.location.href="/signin";
    })
    .catch(error => console.log('error', error));   
}
