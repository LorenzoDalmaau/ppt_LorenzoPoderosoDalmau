let input2 = 0
input.onGesture(Gesture.Shake, function () {
    input2 = randint(0, 2)
    if (input2 == 0) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.clearScreen()
    } else if (input2 == 1) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.clearScreen()
    } else if (input2 == 2) {
        basic.showIcon(IconNames.Scissors)
        basic.clearScreen()
    }
})
