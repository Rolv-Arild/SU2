/**
 * Created by Rolv-Arild on 06.09.2017.
 */
daysLeft();

function daysLeft() {
    var text = (document.getElementsByClassName("text"))[0].value;
    var date;
    if (text === undefined || text.length === 0) {
        date = new Date();
    } else {
        date = new Date(text);
    }
    var christmas = new Date(date.getFullYear(), 11, 24);

    var paragraf = document.getElementById("paragraf");
    paragraf.innerHTML = date.toDateString();

    var i;
    paragraf.classList.remove("overTre");
    paragraf.classList.remove("enTilTre");
    paragraf.classList.remove("underEn");
    if (date <= christmas) {
        i = (christmas.getTime()-date.getTime())/ 86400000;
        if (i >= 3*30) paragraf.classList.add("overTre");
        else if (i >= 30) paragraf.classList.add("enTilTre");
        else paragraf.classList.add("underEn");
    } else {
        christmas = new Date((date.getFullYear()+1), 11, 24);
        i = (christmas.getTime()-date.getTime())/ 86400000;
        paragraf.classList.add("overTre");
    }
    paragraf.innerHTML  = Math.ceil(i);
}