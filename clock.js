

const faceDOM = document.querySelector('#face')
const secDOM = document.querySelector('#second')
const minuteDOM = document.querySelector('#minute')
const hourDOM = document.querySelector('#hour')




const secondTick = function() {
    const now = new Date()
    let secVar = now.getSeconds()
    secDOM.style.transform =  "rotate(" + (secVar/60*360) + "deg)"
    
}

const minTick = function() {
    const now = new Date()
    let minVar = now.getMinutes()
    let secVar = now.getSeconds()
    minVar+=(secVar/60)
    minuteDOM.style.transform = "rotate(" + (minVar/60*360) + "deg)"
}


const hourTick = function() {
    const now = new Date()
    let hourVar = now.getHours()
    let minVar = now.getMinutes()
    hourVar+=(minVar/60)
    hourDOM.style.transform = "rotate(" + (hourVar/12*360) + "deg)"
}

setInterval(secondTick,1000)
setInterval(minTick, 1000)
setInterval(hourTick,1000)
 