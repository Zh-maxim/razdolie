let slider = document.querySelector(".sliderDown")
let counter = 0
let cont1 = document.querySelector(".cont1")
let cont2 = document.querySelector(".cont2")
let cont3 = document.querySelector(".cont3")
let timerSlider = 3000
let toSlide = () => {
    counter = counter - 800
    if (counter == -2400) {
        cont1.classList.remove('redCont')
        cont2.classList.remove('redCont')
        cont3.classList.remove('redCont')
        cont1.classList.add('redCont')
        counter = 0
    }
    if (counter == 0) {
        cont1.classList.remove('redCont')
        cont2.classList.remove('redCont')
        cont3.classList.remove('redCont')
        cont1.classList.add('redCont')
    }
    if (counter == -800) {
        cont1.classList.remove('redCont')
        cont2.classList.remove('redCont')
        cont3.classList.remove('redCont')
        cont2.classList.add('redCont')
    }
    if (counter == -1600) {
        cont1.classList.remove('redCont')
        cont2.classList.remove('redCont')
        cont3.classList.remove('redCont')
        cont3.classList.add('redCont')
    }
    slider.style.left = counter + 'px'
}
let setik = setInterval(toSlide, timerSlider)
cont1.onclick = () => {
    cont1.classList.remove('redCont')
    cont2.classList.remove('redCont')
    cont3.classList.remove('redCont')
    cont1.classList.add('redCont')
    clearInterval(setik)
    counter = 0
    slider.style.left = counter + 'px'
}
cont2.onclick = () => {
    cont1.classList.remove('redCont')
    cont2.classList.add('redCont')
    cont3.classList.remove('redCont')
    clearInterval(setik)
    counter = -800
    slider.style.left = counter + 'px'
}
cont3.onclick = () => {
    cont1.classList.remove('redCont')
    cont2.classList.remove('redCont')
    cont3.classList.add('redCont')
    clearInterval(setik)
    counter = -1600
    slider.style.left = counter + 'px'
}
let brnJourneyTour = document.querySelector('.brnJourneyTour')
let brnJourneyCult = document.querySelector('.brnJourneyCult')
let brnJourneyEco = document.querySelector('.brnJourneyEco')
let generalOffersUp = document.querySelector('.generalOffersUp')
let cultOffersUp = document.querySelector('.cultOffersUp')
let ecoOffersUp = document.querySelector('.ecoOffersUp')
brnJourneyCult.onclick = () => {
    brnJourneyCult.classList.add('redTrvl')
    brnJourneyEco.classList.remove('redTrvl')
    brnJourneyTour.classList.add('greyTrvl')
    generalOffersUp.classList.remove('generalOffersToggleUp')
    cultOffersUp.classList.add('generalOffersToggleUp')
    ecoOffersUp.classList.remove('generalOffersToggleUp')
    generalOffersUp.style.display = "none"
}
brnJourneyEco.onclick = () => {
    brnJourneyCult.classList.remove('redTrvl')
    brnJourneyEco.classList.add('redTrvl')
    brnJourneyTour.classList.add('greyTrvl')
    generalOffersUp.classList.remove('generalOffersToggleUp')
    cultOffersUp.classList.remove('generalOffersToggleUp')
    ecoOffersUp.classList.add('generalOffersToggleUp')
    generalOffersUp.style.display = "none"
}
brnJourneyTour.onclick = () => {
    brnJourneyCult.classList.remove('redTrvl')
    brnJourneyEco.classList.remove('redTrvl')
    brnJourneyTour.classList.remove('greyTrvl')
    generalOffersUp.classList.add('generalOffersToggleUp')
    cultOffersUp.classList.remove('generalOffersToggleUp')
    ecoOffersUp.classList.remove('generalOffersToggleUp')
}