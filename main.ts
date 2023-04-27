input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("הי")
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("name", 0)
})
radio.setGroup(200)
