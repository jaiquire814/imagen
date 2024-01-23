for (let index = 0; index < 2; index++) {
    images.iconImage(IconNames.Angry).showImage(4, 30)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
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
