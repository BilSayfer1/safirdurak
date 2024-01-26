let natural = document.querySelector(`.natural_titanium button`)
let blue_titan = document.querySelector(`.blue_titanium`)
let white_titan = document.querySelector(`.white_titanium`)
let black_titan = document.querySelector(`.black_titanium`)
let ing = document.querySelector(`.image`)


natural.onclick = () => {
ing.src = `img/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium.jpeg`
}
blue_titan.onclick = () => {
    ing.src = `img/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium.jpeg`
}
white_titan.onclick = () => {
    ing.src = `img/white apple.jpeg`
}
black_titan.onclick = () => {
    ing.src = `img/black apple.jpeg`
}
