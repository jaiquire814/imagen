for (let index = 0; index < 4; index++) {
    images.iconImage(IconNames.Surprised).showImage(0)
}
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    # # # . .
    `)
led.plotBarGraph(
3,
1,
true
)
led.unplot(5, 4)
basic.forever(function () {
	
})
