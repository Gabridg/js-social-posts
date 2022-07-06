console.log('JS OK')
/*
# Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
# Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*
#Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
#Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
# ****BONUS**
 1. Formattare le date in formato italiano (gg/mm/aaaa)
 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola  => LF).
 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
# Consigli del giorno:
 Ragioniamo tanto sulla definizione dell'oggetto, se sbagliamo quello tutto diventa più difficile!
 `
*/

// MILESTONE 1
const gallery = [
    {
        postNumber: 1,
        author: 'Phil Mangione',
        authorSrc: 'PM',
        date: '4 mesi fa',
        postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eligendi necessitatibus debitis quasi ab nostrum commodi id tenetur praesentium soluta.',
        src: 'https://unsplash.it/300/300?image=15',
        likes: '80',
    }
]

console.table(gallery);

// MILESTONE 2
const postList = document.getElementById('container');

const createPost = (post) => {
    const card = `
    <div class="post">
    <div class="post__header">
        <div class="post-meta">
            <div class="post-meta__icon">
                <img class="profile-pic" src="" alt="${post.authorSrc}" />
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${post.author}</div>
                <div class="post-meta__time">${post.date}</div>
            </div>
        </div>
    </div>
    <div class="post__text">${post.postText}</div>
    <div class="post__image">
        <img src="${post.src}" alt="" />
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button js-like-button" href="#" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
            </div>
        </div>
    </div>
    </div>`

    return card;
}

postList.innerHTML = createPost();