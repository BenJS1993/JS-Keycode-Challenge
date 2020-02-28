const keycodeTitle = document.getElementById('keycodeTitle');
const keycodeGenerator = document.getElementById('keycodeGenerator');
const head = document.getElementById('keycode');

function myKeycode(event) {
    var key = event.key;
    var location = event.location;
    var which = event.which;
    var code = event.code;

    head.textContent = which;
    
    document.getElementById('eventKey').innerHTML = key;
    document.getElementById('eventLocation').innerHTML = location;
    document.getElementById('eventCode').innerHTML = code;
    document.getElementById('eventWhich').innerHTML = which;
    document.getElementById('keycodeButton').ontouchstart = myKeycode;

    keycodeGenerator.classList.remove('showKeycode');
    keycodeTitle.remove();
}

