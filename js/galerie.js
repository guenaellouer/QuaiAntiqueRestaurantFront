const galerieImage = document.getElementById("allImages");

//récupérer les informations des images
let titre = '<img src=x onerror="window.location.replace(\'https://guenaellouer.net\')"/>';
let imgSource = "../images/restaurant-710961_640.jpg";

let monImage = getImage(titre, imgSource);

//ajouter ces informations dans innerHTML
galerieImage.innerHTML = monImage;

/* On déplace ce code dans script.js
function sanitizeHtml(text){
    const tempHtml = document.createElement('div');
    tempHtml.textcontent = text;
    return tempHtml.innerHTML;
}
*/

function getImage(titre, urlImage){
    titre = sanitizeHtml(titre);
    urlImage = sanitizeHtml(urlImage);
    return ` <div class="col p-3">
                <div class="image-card text-white">
                    <img src="${urlImage}" class="rounded w-100"/>
                    <p class="titre-image">${titre}</p>
                    <div class="action-image-buttons" data-show="admin">
                        <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></button>
                        <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#DeletePhotoModal"><i class="bi bi-trash"></i></button>
                    </div>
                </div>
            </div>`;
}