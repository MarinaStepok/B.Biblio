var result = new URLSearchParams(window.location.search);

    if(result.has('nom', 'prenom', 'data', 'adresse', 'ville', 'code', 'mail', 'telephone')){
        var p1 = document.getElementById('nom');
        p1.innerHTML = "Votre nom  : "+result.get('nom');

        var p2 = document.getElementById('prenom');
        p2.innerHTML = "Votre prénom  : "+result.get('prenom');

        var p3 = document.getElementById('data');
        p3.innerHTML = "Votre date de naissance : "+result.get('data');

        var p4 = document.getElementById('adresse');
        p4.innerHTML = "Votre adresse  : "+result.get('adresse');

        var p5 = document.getElementById('ville');
        p5.innerHTML = "Votre ville  : "+result.get('ville');

        var p6 = document.getElementById('code');
        p6.innerHTML = "Votre code postal  : "+result.get('code');

        var p7 = document.getElementById('mail');
        p7.innerHTML = "Votre E-mail : "+result.get('mail');

        var p8 = document.getElementById('telephone');
        p8.innerHTML = "Votre téléphone  : "+result.get('telephone');
    }
        if(window.location.href.substr(-15) == "form-energ-auteur-2.html"){
        window.location.href = "form-energ-auteur.html";
    }