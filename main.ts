input.onButtonPressed(Button.A, function () {
    adım = 0
    basic.showNumber(adım)
})
let adım = 0
adım = 0
basic.forever(function () {
    if (input.isGesture(Gesture.Shake) && input.acceleration(Dimension.Strength) >= 1200) {
        adım += 1
        basic.showNumber(adım)
    }
})
