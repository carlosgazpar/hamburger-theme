const modalClose = document.getElementById('modal-close')
const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal-content')
const servicesModalTrigger = document.getElementById('services-modal-trigger')

servicesModalTrigger.addEventListener('click', () => {
    modal.classList.add('modal-show')
})

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal-show')
})

document.addEventListener('click', (event) => {
    const outsideClick = !modalContent.contains(event.target)
    const clickServicesTrigger = servicesModalTrigger.contains(event.target)

    if(outsideClick && !clickServicesTrigger) modal.classList.remove('modal-show')
}) 
