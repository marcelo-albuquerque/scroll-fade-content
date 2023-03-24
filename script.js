const scrollFadeContent = document.getElementById( 'scroll-fade-content' )

const cards = scrollFadeContent.querySelectorAll( '.card' )
const nextButtons = scrollFadeContent.querySelectorAll( '.next-button' )

let cardPosition = 1

nextButtons.forEach(Button => {
    Button.addEventListener( 'click', ShowNextCard )
})

function ShowNextCard() {
    this.removeEventListener( 'click', ShowNextCard )

    const card = cards[cardPosition]
    card.style.display = 'block'

    card.scrollIntoView({ behavior: "smooth", block: "start" })

    const progressBar = GetProgressBar( cards[cardPosition - 1] )
    CheckProgressBar( progressBar )

    cardPosition++
}

const CheckProgressBar = ( ProgressBar ) => {
    const bar = ProgressBar.querySelector( '.progress-bar' )
    const unchecked = ProgressBar.querySelector( '.end-point-unchecked' )
    const checked = ProgressBar.querySelector( '.end-point-checked' )

    unchecked.style.display = 'none'
    checked.style.display = 'block'
    bar.classList.add( 'show' )
}

const GetProgressBar = ( Card ) => {
    return Card.querySelector( '.progress-bar-container' )
}