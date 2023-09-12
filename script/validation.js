const validateForm = () => {

    const prenom = document.getElementById('prenom');
    const nom = document.getElementById('nom');
    const dateNaissane = document.getElementById('dateNaissance');
    const email = document.getElementById('email');
    const numTelephone = document.getElementById('numTelephone');
    const ville = document.getElementById('ville');

    const prenomValue = prenom.value.trim();
    const nomValue = nom.value.trim();
    const dateNaissanceValue = dateNaissane.value.trim();
    const emailValue = email.value.trim();
    const numTelephoneValue = numTelephone.value.trim();
    const villeValue = ville.value.trim();

    let noError = true;

    if (prenomValue === '') {
        setError(prenom, 'Veuillez entrer votre prénom.');
        noError = false;
    } else {
        setSuccess(prenom);
    }

    if (nomValue === '') {
        setError(nom, 'Veuillez entrer votre nom.');
        noError = false;
    } else {
        setSuccess(nom);
    }

    if (dateNaissanceValue === '') {
        setError(dateNaissane, 'Veuillez entrer votre date de naissance.');
        noError = false;
    } else {
        setSuccess(dateNaissane);
    }

    if (emailValue === '') {
        setError(email, 'Veuillez entrer votre courriel.');
        noError = false;
    } else if (!validateEmail(emailValue)) {
        setError(email, 'Entrez un courriel valide.');
        noError = false;
    } else {
        setSuccess(email);
    }

    if (numTelephoneValue === '') {
        setError(numTelephone, 'Veuillez entrer votre numéro de téléphone.');
        noError = false;
    } else {
        setSuccess(numTelephone);
    }

    if (villeValue === '') {
        setError(ville, 'Veuillez entrer votre date de naissance.');
        noError = false;
    } else {
        setSuccess(ville);
    }

    console.log(noError);
    return noError;

}

const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const setError = (element,message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = '';
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
}