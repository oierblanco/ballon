input.onPinPressed(TouchPin.P0, function () {
    game.addScore(1)
})
input.onPinPressed(TouchPin.P1, function () {
    for (let index = 0; index < 4; index++) {
        pins.servoWritePin(AnalogPin.P1, 0)
        pins.servoWritePin(AnalogPin.P1, 180)
    }
})
game.setScore(0)
basic.forever(function () {
    basic.showNumber(game.score())
})
