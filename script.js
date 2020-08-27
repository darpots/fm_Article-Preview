function ToggleSVG(){
    const shareIcon = document.querySelector('.share-icon')
    shareIcon.classList.toggle('open')

    const shareArrow = document.querySelector('.share-arrow')
    shareArrow.classList.toggle('open')

    const socialsContainer = document.querySelector('.socials-container')
    socialsContainer.classList.toggle('show')
}