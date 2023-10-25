
function inputvalue( value)
{
    document.getElementById("input").value += value;
}
function allclear()
{
    document.getElementById("input").value = "";
}
 
function calculate() {
    var p = document.getElementById("input").value;
    var q = eval(p);
    document.getElementById("input").value = q;
}
function backspace() {
    var p = document.getElementById("input").value;
    document.getElementById("input").value = p.slice(0, -1);
}