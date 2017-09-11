/**
 * Created by Rolv-Arild on 01.09.2017.
 */


var tabell = document.querySelectorAll("td");
for (var i = 0; i < tabell.length; i++) {
    $(tabell[i]).single_double_click(
        function () {
            if (this.classList.contains("player1")) {
                this.classList.remove("player1");
                return;
            }
            if (this.classList.contains("player2")) {
                this.classList.remove("player2");
                return;
            }
            this.classList.add("player1");
        },
        function () {
            if (this.classList.contains("player1")) this.classList.remove("player1");
            this.classList.add("player2");
        }
    );
}