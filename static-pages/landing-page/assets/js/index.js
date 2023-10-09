var button = document.querySelector('.add-btn')
var btn = document.querySelector('.add-bt')
var but = document.querySelector('.add-b')
var buttn = document.querySelector('.add-btns')

var moreInfo = document.querySelector('#last-text')
var moreI = document.querySelector('#third-text')
var moreIn = document.querySelector('#second-text')
var moreInf = document.querySelector('#first-text')
var minus = document.querySelector('.bar')

button.addEventListener("click", (e) => {
    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block"

    }else{
        moreInfo.style.display = "none"
    }
})
buttn.addEventListener("click", (e) => {
    if (moreI.style.display === "none") {
        moreI.style.display = "block"

    }else{
        moreI.style.display = "none"
    }
})
but.addEventListener("click", (e) => {
    if (moreInf.style.display === "none") {
        moreInf.style.display = "block"

    }else{
        moreInf.style.display = "none"
    }
})
btn.addEventListener("click", (e) => {
    if (moreIn.style.display === "none") {
        moreIn.style.display = "block"

    }else{
        moreIn.style.display = "none"
    }
})
    
