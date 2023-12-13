import './style.css'

const expandbutton = document.querySelector(".expand");
expandbutton.addEventListener('click', () => {
const all = document.querySelectorAll(".all");
all.forEach((button) => {
    button.style.visibility = "visible"
})
const expand = document.querySelector('.expand');
expand.textContent = "x"
})

const allbutton = document.querySelectorAll(".all");
allbutton.forEach((button) => {
    button.addEventListener('click', () => {
        const every = document.querySelectorAll(".all");
        every.forEach((btn) => {
            btn.style.visibility = "hidden";
        })
        const expandbutton = document.querySelector('.expand')
        expandbutton.textContent = "+"
    })
})

