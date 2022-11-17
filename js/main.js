
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta (se avete fatto bonus di ieri e partite da li, sennò range rimane di base 1-100): le bombe.
// In seguito l’utente clicca su una cella:
// se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.






const btn = document.getElementById("btn");

// Definisco il container

const myContainer = document.getElementById("container");

console.log(myContainer);

// creo l'elemento bottone per la funzione


btn.addEventListener ("click",


    // Creo la funzione relativa al bottone

    function() {
        myContainer.innerHTML = '';
        console.clear();

        // Creazione della griglia 10x10 tramite ciclo for e funzione
        // Inizio dal ciclo for

        for (let i = 1; i <= 100; i++ ){

            // creo l'elemento per la funzione
            let nuovoElemento = createBoxGrid(i); 


            nuovoElemento.addEventListener("click",
            
                function() {
                    // toggle mi permette di aggiungere o togliere l'elemento aggiunto ad ogni click
                    nuovoElemento.classList.toggle("clicked");

                    // Visualizzare in console la cella cliccata
                    console.log("Cella:", i);
                }

            )


            myContainer.appendChild(nuovoElemento);
        



        }


    }






)







// Funzione

function createBoxGrid (index){

    // Creare un elemento div e la sua classe relativa
    const elementBox = document.createElement("div");

    elementBox.classList.add("celle");
    // console.log(elementBox);

    // Creo la numerazione progressiva delle celle
    elementBox.innerHTML = index;


    // ritornarlo
    return elementBox;

}