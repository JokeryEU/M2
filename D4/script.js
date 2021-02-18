let players = [];

function addNewPlayer() {
  const inputPlayer = document.getElementById("player").value.trim();
  const ul = document.getElementById("listofnames");
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(inputPlayer));
  ul.appendChild(li);
  document.getElementById("player").value = "";
}
