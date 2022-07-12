let pot = 0
basic.forever(function () {
    pot = pins.analogReadPin(AnalogPin.P1)
    pins.servoWritePin(AnalogPin.P0, pins.map(
    pot,
    0,
    1023,
    0,
    180
    ))
})
