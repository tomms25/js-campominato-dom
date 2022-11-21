// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta (se avete fatto bonus di ieri e partite da li, sennò range rimane di base 1-100): le bombe.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l’utente clicca su una cella:
// se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

// Definisco le variabili 
const contenitore = document.getElementById('container');
// console.log(contenitore);

// Definisco il bottone che genererà a griglia
const button = document.getElementById('btn');

button.addEventListener('click',
  function () {
  
    contenitore.innerHTML = '';
    
    console.clear();

    // Definisco il ciclo for
    for (let i = 0; i < 100; i++){
      let nuovoElemento = creaSquare();

      nuovoElemento.append([i + 1]);

      nuovoElemento.addEventListener('click',
        function () {
          nuovoElemento.classList.add('square-click');

          console.log('Hai cliccato la cella:', i + 1);
        }
      )

      contenitore.appendChild(nuovoElemento);
    }
  }
)

// Creo la funzione per creare il div e la classe associata
function creaSquare() {
  const elemento = document.createElement('div');
  elemento.classList.add('square');

  // console.log(elemento);
  return elemento;
}