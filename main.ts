OLED12864_I2C.init(60)
OLED12864_I2C.on()
basic.forever(function () {
    if (tinkercademy.PIR(DigitalPin.P0)) {
        tinkercademy.LED(DigitalPin.P1, OnOff.On)
        tinkercademy.LED(DigitalPin.P8, OnOff.Off)
        OLED12864_I2C.showString(
        0,
        0,
        "Hello!",
        1
        )
    } else {
        tinkercademy.LED(DigitalPin.P1, OnOff.Off)
        tinkercademy.LED(DigitalPin.P8, OnOff.On)
        OLED12864_I2C.showString(
        0,
        0,
        "Absent",
        1
        )
    }
})
