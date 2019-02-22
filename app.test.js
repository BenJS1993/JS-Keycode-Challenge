const app = require('../app.js');


test('Should contain the keycode function', () => {
    expect(app.myKeycode).toContain('h', 'keyh', 72);
})

test('Should give the key value', () => {
    expect(app.key).toContain('h')
})

test('Should give the code value', () => {
    expect(app.code).toContain('keyH')
})

test('Should give the Unicode value', () => {
    expect(app.which).toContain(72)
})