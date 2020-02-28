const keycodeTitle = document.getElementById('keycodeTitle');
const keycodeGenerator = document.getElementById('keycodeGenerator');
const head = document.getElementById('keycode');

function myKeycode(event) {
    let key = event.key;
    let location = event.location;
    let which = event.which;
    let code = event.code;

    head.textContent = which;
    
    document.getElementById('eventKey').innerHTML = key;
    document.getElementById('eventLocation').innerHTML = location;
    document.getElementById('eventCode').innerHTML = code;
    document.getElementById('eventWhich').innerHTML = which;
    document.getElementById('keycodeButton').ontouchstart = myKeycode;

    keycodeGenerator.classList.remove('showKeycode');
    keycodeTitle.remove();
}

let touchElement = document.getElementById('keycodeButton');

touchElement.addEventListener('touchstart', startTouch, false);
touchElement.addEventListener('touchend', endTouch, false);

function startTouch(e) {
    let touch = e.touches;
}

function endTouch(e) {

}