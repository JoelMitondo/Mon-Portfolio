
const formContact= document.querySelector('.formContact')
formContact.addEventListener('submit', function(e) {
    e.preventDefault();

    const notification = document.getElementById('notification');
    
    // Affichage de la notification avec une petite animation bounce
    notification.classList.remove('hidden');
    notification.classList.add('flex', 'animate-bounce'); 

   
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const sujet = document.getElementById('sujet').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const numero = "243823310484";

   
    const texteFinal = `Bonjour Joel MITONDO, %0A%0AJe suis ${prenom} ${nom}.%0A%0A*Sujet :* ${sujet}%0A%0A *Message :*%0A${message} %0A%0A*Mon Email :* ${email}`;
    const lienWhatsApp = `https://wa.me/${numero}?text=${texteFinal}`;

    // Pour iPhone, on réduit le délai au minimum ou on change la méthode
        setTimeout(function() {
            // Détection de l'iPhone / iOS
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

            if (isIOS) {
                // Sur iPhone, on redirige directement dans l'onglet actuel pour éviter le blocage
                window.location.href = lienWhatsApp;
            } else {
                // Sur Android/PC, on peut ouvrir un nouvel onglet
                window.open(lienWhatsApp, '_blank');
            }

            // la notification sois cachée après
            setTimeout(() => {
                notification.classList.add('hidden');
            }, 500);
            
        }, 3500); 

    
});

