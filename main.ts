input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.No)
})
basic.showString("Hello! Checalita!")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    basic.pause(200)
})
