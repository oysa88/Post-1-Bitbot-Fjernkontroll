input.onButtonPressed(Button.AB, function () {
    if (Arm == 0) {
        Arm = 1
    } else {
        Arm = 0
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    Arm = 0
})
let Roll = 0
let Pitch = 0
let Arm = 0
radio.setGroup(1)
basic.forever(function () {
    Pitch = input.rotation(Rotation.Pitch)
    Roll = input.rotation(Rotation.Roll)
    radio.sendValue("P", Pitch)
    radio.sendValue("A", Arm)
    radio.sendValue("R", Roll)
})
