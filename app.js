function myKeycode(event) {
    var key = event.key;
    var code = event.code;
    var which = event.which;

    document.getElementById('keycode').innerHTML = 'The key is ' + key;
    document.getElementById('keycode').innerHTML = code;
    document.getElementById('keycode').innerHTML = which;
}
