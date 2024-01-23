for (let index = 0; index < 2; index++) {
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    images.iconImage(IconNames.Heart).showImage(4, 30)
}
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
    	
    }
})
