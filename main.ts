for (let index = 0; index < 2; index++) {
    images.iconImage(IconNames.Heart).showImage(4, 30)
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
    for (let index = 0; index < 4; index++) {
    	
    }
}
basic.forever(function () {
	
})
