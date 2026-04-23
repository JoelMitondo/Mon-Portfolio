// Recupération des données sur le formulaire contact et le formulaire lui-meme (en bloquant l'evenement submit par defaut)
const formContact = document.querySelector(".formContact")
formContact.addEventListener("submit", (event)=>{
    event.preventDefault()

    const prenomUtilisateur = document.getElementById("prenom").value
    const nomUtilisateur = document.getElementById("nom").value
    const emailUtilisateur = document.getElementById("email").value
    const sujetUtilisateur = document.getElementById("sujet").value
    const messageUtilisateur = document.getElementById("message").value
    const monNumero = 243823310484

    const textePredefini = "Bonjour Joel MITONDO, je suis " + prenomUtilisateur + nomUtilisateur + ".%0A" +
                            "*Sujet :*" + sujetUtilisateur + ".%0A" +
                            "*Mon message est :*%0A" + messageUtilisateur + "%0A"
                            "*Mon Email est là : *" + emailUtilisateur
    
    const lienVersWhatsapp = "https://wa.me/" + monNumero + "?text=" + textePredefini

    window.open(lienVersWhatsapp, '_blank')
})

// maintenant, la construction de mon message


