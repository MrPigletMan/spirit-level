let y = 0
let x = 0
let change = 0
let ChangeX = x
let ChangeY = y
basic.forever(function () {
    x = Math.round(input.acceleration(Dimension.X) / 500) - 2
    y = Math.round(input.acceleration(Dimension.Y) / 500) - 2
    if (ChangeY != y || ChangeX != x) {
        basic.clearScreen()
        ChangeX = x
        ChangeY = y
        led.plot(x * -1, y * -1)
    }
})
