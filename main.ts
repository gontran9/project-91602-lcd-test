I2C_LCD1602.LcdInit(0)
I2C_LCD1602.ShowString("Keyestudio", 3, 0)
I2C_LCD1602.BacklightOn()
let Value = 0
basic.showIcon(IconNames.Sad)
basic.forever(function () {
    I2C_LCD1602.ShowString("Keyestudio", 3, 0)
    Value += 1
    I2C_LCD1602.ShowNumber(Value, 7, 1)
    basic.pause(500)
})
