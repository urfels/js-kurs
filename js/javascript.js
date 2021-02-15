function mal() {


var text = "";
var i;
for (i = 1; i <= 10; i++) {
  text += "<tr>";
  for (j = 1; j <= 10; j++) {
     text += "<td>" + i * j + "</td>";
    }
    text += "</tr>";
}
  document.getElementById("multiplikation").innerHTML = text;
}
