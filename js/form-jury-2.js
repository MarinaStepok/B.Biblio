var result = new URLSearchParams(window.location.search);

    if(result.has('nom', 'prenom', 'data', 'adresse', 'ville', 'code', 'mail', 'telephone')) {
        var p1 = document.getElementById('nom');
        var p2 = document.getElementById('prenom');
        var p3 = document.getElementById('data');
        var p4 = document.getElementById('adresse');
        var p5 = document.getElementById('ville');
        var p6 = document.getElementById('code');
        var p7 = document.getElementById('mail');
        var p8 = document.getElementById('telephone');


        p1.innerHTML = "Votre nom  : "+result.get('nom');
        p2.innerHTML = "Votre prénom  : "+result.get('prenom');
        p3.innerHTML = "Votre date de naissance : "+result.get('data');
        p4.innerHTML = "Votre adresse  : "+result.get('adresse');
        p5.innerHTML = "Votre ville  : "+result.get('ville');
        p6.innerHTML = "Votre code postal  : "+result.get('code');
        p7.innerHTML = "Votre E-mail : "+result.get('mail');
        p8.innerHTML = "Votre téléphone  : "+result.get('telephone');
    }

    if(window.location.href.substr(-15) == "form-energ-jury-2.html"){
        window.location.href = "form-energ-jury.html";
    }