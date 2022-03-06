let body = document.querySelector("body");
let div = document.createElement("div");

body.appendChild(div);

for (let i = 0; i < 8; i++) {
  let headerOne = document.createElement("h1");
  headerOne.innerText = 1 + 1;
  headerOne.className = "wrapper";
  body.appendChild(headerOne);
  div.appendChild(headerOne);
}
