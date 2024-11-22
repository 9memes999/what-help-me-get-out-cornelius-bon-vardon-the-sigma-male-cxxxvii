function box () {
    timer = 35
    while (timer > 0) {
        turn("right", 30)
        timer += -1
        basic.pause(100)
    }
    basic.pause(300)
    timer = 42
    while (timer > 0) {
        turn("left", 30)
        timer += -1
        basic.pause(100)
    }
    timer = 30
    while (timer > 0) {
        Maqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CW, 255)
        timer += -1
        basic.pause(100)
    }
    timer = 25
    while (timer > 0) {
        turn("left", 30)
        timer += -1
        basic.pause(100)
    }
    timer = 2
    while (timer > 0) {
        turn("right", 30)
        timer += -1
        basic.pause(100)
    }
    has_called = 1
}
function song () {
    music.play(music.tonePlayable(554, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(622, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(415, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(622, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(698, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(831, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(740, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(698, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(554, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(622, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(415, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(831, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(740, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(698, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(554, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(622, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(415, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(622, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(698, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(831, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(740, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(698, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(554, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(622, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(415, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Heart)
}
function circle () {
    timer = 40
    while (timer > 0) {
        turn("right", 30)
        timer += -1
        basic.pause(100)
    }
    timer = 600
    while (timer > 0) {
        turn("left", 60)
        timer += -1
        basic.pause(100)
    }
    timer = 300
    while (timer > 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        timer += -1
        basic.pause(100)
    }
    finished = true
    circle_called = 1
}
function intro () {
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(466, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Half))
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(415, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(370, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(311, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
}
function turn (dir: string, speed: number) {
    if (dir == "left") {
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, speed)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CW, 0 - speed)
    } else if (dir == "right") {
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CW, speed)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, 0 - speed)
    }
}
let final_over = 0
let sensor_dist = 0
let finished = false
let has_called = 0
let circle_called = 0
let timer = 0
music.setVolume(137)
music.setTempo(118)
timer = 0
circle_called = 0
has_called = 0
finished = false
radio.setGroup(1)
basic.forever(function () {
    sensor_dist = maqueen.Ultrasonic()
    if (finished == false) {
        if (sensor_dist < 35) {
            if (has_called == 0) {
                box()
            } else {
                if (circle_called == 0) {
                    circle()
                }
            }
        } else {
            Maqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CW, 255)
        }
    } else {
        if (final_over == 0) {
            Maqueen_V5.motorStop(Maqueen_V5.Motors.All)
            intro()
            radio.sendNumber(23)
            song()
            final_over = 1
        }
    }
})
basic.forever(function () {
    if (timer > 0) {
        timer += -1
        basic.pause(1)
    }
})
