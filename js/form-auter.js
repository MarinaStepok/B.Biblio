var buttonValid = document.getElementById('button-valid');

buttonValid.addEventListener('click', traitement);

    function traitement(e){
        var nom = document.forms[0].nom.value;
        var prenom = document.forms[0].prenom.value;
        var data = document.forms[0].data.value;
        var adresse = document.forms[0].adresse.value;
        var ville = document.forms[0].ville.value;
        var code = document.forms[0].code.value;
        var mail = document.forms[0].mail.value;
        var telephone = document.forms[0].telephone.value;

        var reg = new RegExp('^[a-z0-9_.-]+@[a-z0-9_.-]+\.[a-z]{2,4}$');
        var letters = /^[A-Za-z]+$/;
        //var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var regex = /[0-9]|\./;
        var bool = true;

        /* Nom */

        if (!letters.test(nom)) {
            alert('Nom doit contenir uniquement caractères alphabétiques');
            bool = false;
            e.preventDefault();
        }

        if(nom.length <= 2){
            alert("Le nom doit contenir au moins 3 lettres");
            bool = false;
            e.preventDefault();
        }


        /* Prénom*/

        if (!letters.test(prenom)) {
            alert('Prénom doit contenir uniquement caractères alphabétiques');
            bool = false;
            e.preventDefault();
        }

        if(prenom.length <= 2){
            alert("Le prénom doit contenir au moins 3 lettres");
            bool = false;
            e.preventDefault();
        }


        /* Date de naissance*/

        if (!(regex.test(data))){
            alert('Date de naissance doit contenir uniquement des chiffres');
            bool = false;
            e.preventDefault();
        } 


        /* E-mail*/

        if(!(reg.test(mail))){
            alert("Le mail n'est pas valide");
            bool= false
            e.preventDefault();
        }


        /* Téléphone*/

        if(!(regex.test(telephone))){
            alert("Le téléphone doit contenir des chiffres");
            bool= false
            e.preventDefault();
        }

         else if(telephone.length <= 9){
            alert("La téléphone doit comporter 10 chiffres");
            bool = false;
            e.preventDefault();
        }


        if(bool){
            alert("Merci d'avoir répondu");
            window.location.href = "form-energ-auteur-2.html";
        }
}

