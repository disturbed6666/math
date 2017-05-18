/**
 * Created by Ucenik on 11.5.2017..
 */
function Povuci() {
    var broj = document.getElementById("prvi").value;
    document.getElementById("novip").innerHTML += broj + " ";
};
function MaxVrijednost() {
    var listaBrojeva = document.getElementById("novip").innerHTML.split(" ");
    console.log(Math.max.apply(null, listaBrojeva));
}