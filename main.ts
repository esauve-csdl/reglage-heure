/**
 * Paramètres d'initialisation
 */
/**
 * Affichage sur l'écran Oled de la date et de l'heure
 */
/**
 * Inscrire ici la date et l'heure souhaité au moment où le bouton B est appuyé
 */
input.onButtonPressed(Button.A, function () {
    RTC_DS1307.DateTime(
    22,
    10,
    26,
    8,
    5,
    1009
    )
})
led.enable(false)
basic.pause(1000)
OLED.init(128, 64)
/**
 * On ajoute des lignes vides pour remplir l'écran
 */
basic.forever(function () {
    OLED.writeStringNewLine("" + (RTC_DS1307.getTime(RTC_DS1307.TimeType.DAY) - 0) + "/" + RTC_DS1307.getTime(RTC_DS1307.TimeType.MONTH) + "/" + (RTC_DS1307.getTime(RTC_DS1307.TimeType.YEAR) - 0) + "  " + (RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR) - 0) + ":" + RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE) + ":" + RTC_DS1307.getTime(RTC_DS1307.TimeType.SECOND) + " ")
    for (let index = 0; index < 7; index++) {
        OLED.writeStringNewLine("")
    }
})
