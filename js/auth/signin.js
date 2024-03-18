const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //Ici, il faudra appeler l'API pour vérifier les crédentials en BDD

    if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){
        //alert("Vous êtes connecté !");--supprimé car présent juste pour faire un test de connexion
        
        //Il faudra récupérer le vrai token
        const token = "123654789azertyuiop987456321";
        setToken(token);
        //placer ce token en cookie
        setCookie(RoleCookieName, "client",7);
        window.location.replace("/");

    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}