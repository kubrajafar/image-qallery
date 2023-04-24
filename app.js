const bigImg = document.getElementById("bigImg");
const img = document.getElementById("images");

let child = img.children;

for (let i = 0; i < child.length; i++) {
  child[i].addEventListener("click", function () {
    let className = child[i].getAttribute("class");
    bigImg.setAttribute("class", className);
  });
}
