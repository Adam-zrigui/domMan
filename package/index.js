"use strict";
const form = document.getElementById('workpls')
const username = document.getElementById('name')
const pass = document.getElementById('password')
const btn = document.getElementById('btn')

let usernames = ''
username.onchange = (e) => {

    usernames = e.target.value
console.log(usernames)
}
let passs = ''
pass.onchange = (e) => {
   
    passs = e.target.value
    console.log(passs)
}
 
form.onsubmit = () => {
localStorage.setItem("user", usernames)
localStorage.setItem("password", passs)
}
