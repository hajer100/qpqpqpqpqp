let Ns = 0
let Nl = 0
let Nuit = 0
let Présence = 0
basic.forever(function () {
    Ns = input.soundLevel()
    Nl = input.lightLevel()
    if (Nl >= 80) {
        Nuit = 0
    } else {
        Nuit = 1
        if (Ns >= 180) {
            Présence = 1
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(1000)
            pins.digitalWritePin(DigitalPin.P0, 0)
            basic.pause(1000)
        } else {
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
    }
})
