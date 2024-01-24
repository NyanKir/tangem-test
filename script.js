const card = document.getElementById('card');
const button = document.getElementById('cardCloseButton')

function scrollHandler() {
    const scrollDistance = window.scrollY;

    let isClosed = sessionStorage.getItem("cardCloseButton") == 1;


    if (scrollDistance >= 100 && !isClosed) {
        card.classList.add('card--active');
    } else {
        card.classList.remove('card--active');
    }
}

window.addEventListener('scroll', scrollHandler);

button.addEventListener('click', () => {
    sessionStorage.setItem("cardCloseButton", 1);
    card.classList.remove('card--active');
}, {
    once: true
})