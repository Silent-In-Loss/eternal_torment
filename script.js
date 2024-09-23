const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')

burger.onclick = () => {
    menu.classList.toggle('open')
}

const modalBtn = document.querySelector('#modalBtn')
const closeBtn = document.querySelector('#closeBtn')
const modal = document.querySelector('.modal')

modalBtn.onclick = () => {
    modal.classList.add('open-modal')
}

closeBtn.onclick = () => {
    modal.classList.remove('open-modal')
}

modal.onclick = (e) => {
    // modal.classList.remove('open-modal')
    console.log(e.target);

    if(!e.target.closest('.modal__box')) {
        modal.classList.remove('open-modal')
    }
}