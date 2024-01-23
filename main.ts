for (let index = 0; index < 2; index++) {
    images.iconImage(IconNames.Angry).showImage(4, 30)
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
}
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
    	
    }
})
