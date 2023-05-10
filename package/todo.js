 
const rm = document.getElementById("remove")
const warn = document.createElement("h1").innerHTML = "<a href='/view/index.html'>sign in.</a>"
if (!localStorage.getItem("user")) {
    rm.replaceChildren(warn)
} 
const div = document.getElementById('div');
const creation = document.createElement("h1")
div.appendChild(creation)
creation.innerHTML = `welcome ${localStorage.getItem("user")}`
const username = document.getElementsByTagName('input')[0]
let getter = ''
username.onchange = (e) => {

    getter = e.target.value
console.log(getter)
}
const form = document.getElementById("form")
form.onsubmit = () => {
    localStorage.setItem("pls", getter)
    localStorage
}
