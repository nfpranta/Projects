let buttonTag = document.getElementsByTagName("button");
let bodyTag = document.getElementsByTagName("body");
buttonTag[0].innerHTML = "Click Me";
buttonTag[0].style.cursor = "pointer";
function buttonclick() {
  bodyTag[0].style.backgroundColor =
    "rgb(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    ")";
  console.log(bodyTag[0].style.backgroundColor);
}
buttonTag[0].onclick = buttonclick;
