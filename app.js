function myKeycode(event) {
    var key = event.key;
    var code = event.code;
    var which = event.which;

    document.getElementById('keycode').innerHTML = 'Key: ' + key + ' Code: ' + code + ' Unicode: ' + which;
}

return myKeycode = 'h ' + key + ' keyH ' + code + 72 + which, 

module.exports = {
    myKeycode,
    key,
    code,
    which
}