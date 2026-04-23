
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

   
    const texteFinal = `Bonjour Joel MITONDO, %0Aje suis ${prenom} ${nom}.%0A*Sujet :* ${sujet}%0A%0A *Message :*%0A${message} %0A%0A*Mon Email :* ${email}`;
    const lienWhatsApp = `https://wa.me/${numero}?text=${texteFinal}`;

    // Délai de 2 secondes avant la redirection
    setTimeout(function() {
        window.open(lienWhatsApp, '_blank');
        
        // Optionnel : recacher la notification après le départ
        setTimeout(() => {
            notification.classList.add('hidden');
            notification.classList.remove('flex');
        }, 3000);
        
    }, 4000); 
});

