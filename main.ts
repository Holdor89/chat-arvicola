input.onButtonPressed(Button.A, function () {
    radio.sendString("arvicola")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(255)
