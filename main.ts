input.onButtonPressed(Button.A, function () {
    adım = 0
    basic.showNumber(adım)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(adım)
})
input.onGesture(Gesture.Shake, function () {
    adım += 1
    basic.showNumber(adım)
    led.stopAnimation()
})
let adım = 0
adım = 0
basic.showNumber(adım)
