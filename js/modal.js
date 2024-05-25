const openModal = document.querySelector('.hero__cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');
const btnModal = document.querySelector('.btn__modal');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
})

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
})

btnModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
})