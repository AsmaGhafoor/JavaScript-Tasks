console.log("Bulb Task");

function bulbOn() {
    let bulbobj = document.getElementById(".bulboff");
    bulbobj.setAttribute("src", "pic_bulbon.gif")
}


function bulbOff() {
    let bulbobj2 = document.getElementById(".bulboff");
    bulbobj2.setAttribute("src", "pic_bulboff.gif")
}